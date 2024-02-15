export type PageComponent = React.FC<{
  params: { slug: string };
  searchParams: Partial<{
    id: string;
  }>;
}>;
