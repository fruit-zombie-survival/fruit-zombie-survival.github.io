import type { HomePageDefinition, PageSection, SeoPageDefinition } from "@/config/types";

function tableText(table: NonNullable<PageSection["table"]>) {
  return [table.caption, ...table.columns, ...table.rows.flat()];
}

function sectionText(section: PageSection) {
  const parts = [
    section.heading,
    section.intro,
    ...(section.paragraphs ?? []),
    ...(section.links ?? []).flatMap((link) => [link.label, link.description ?? ""]),
  ];
  for (const subsection of section.subsections ?? []) {
    parts.push(subsection.heading, ...subsection.paragraphs, ...(subsection.bullets ?? []));
    if (subsection.table) parts.push(...tableText(subsection.table));
  }
  for (const step of section.steps ?? []) parts.push(step.heading, step.description);
  if (section.table) parts.push(...tableText(section.table));
  return parts.filter(Boolean).join("\n");
}

export function pagePlainText(page: HomePageDefinition | SeoPageDefinition) {
  const heroLead = page.hero.lead;
  const supporting =
    "supportingText" in page.hero && typeof page.hero.supportingText === "string"
      ? page.hero.supportingText
      : "";
  const sections = page.sections.map(sectionText);
  const faq = (page.faq ?? []).flatMap((item) => [item.question, item.answer]);
  return [page.title, page.description, page.hero.heading, heroLead, supporting, ...sections, ...faq].join("\n");
}

export function wordCount(text: string) {
  return text.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g)?.length ?? 0;
}

export function termCount(text: string, term: string) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(`\\b${escaped}\\b`, "gi")) ?? []).length;
}
