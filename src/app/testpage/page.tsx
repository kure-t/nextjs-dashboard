export const dynamic = 'force-dynamic'
export default function Home() {
    const now = new Date()
  return (
    <div>
        {now.toLocaleString()}
    </div>
  );
}
