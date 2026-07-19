import { redirect } from "next/navigation";

export default async function BuchRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/survey?src=buch`);
}
