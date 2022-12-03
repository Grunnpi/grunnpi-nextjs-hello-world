import Link from 'next/link'
const Index = () => (
  <title>Sboub</title>
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
