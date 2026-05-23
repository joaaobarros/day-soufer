/**
 * Custom Next.js image loader.
 *
 * With `output: "export"` o loader padrão (`/_next/image?url=...`) não existe,
 * e quando `unoptimized: true` é usado, o basePath NÃO é adicionado ao src.
 * Este loader corrige isso: retorna o src com o basePath prefixado, sem
 * depender de nenhum servidor de otimização.
 */
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src}`;
}
