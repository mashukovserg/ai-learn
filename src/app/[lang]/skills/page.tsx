import { redirect } from 'next/navigation';

export default async function SkillsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  redirect(`/${lang}/settings#skills-matrix`);
}
