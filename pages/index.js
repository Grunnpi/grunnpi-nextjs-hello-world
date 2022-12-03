import Link from 'next/link'
const Index = () => (
  <div>
    <title>PTH Inventaire</title>
    Entrée/Sortie d''inventaire.{' '}
    <br/>
    <Link href="/about">
      <a>About</a>
    </Link>
    <br/>
    <Link href="/day">
      <a>Day</a>
    </Link>
    <br/>
    <Link href="/posts/50">
      <a>Ligne 50 : Petit plat alu</a>
    </Link>
  </div>
)
export default Index;
