import Link from 'next/link'
const Index = () => (
  <div>
    <title>X</title>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
