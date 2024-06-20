
import { About } from '@/About/page'
import { Button, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { Accbrand } from './Components/Accbrand'

export default function Home(){
  return(
    <>
    <Navbar className='navbar'>
      <NavbarBrand className='brand'>
        <Accbrand />
      </NavbarBrand>
      <NavbarItem>
        <Button href='/About' as={Link} color='primary' variant='ghost'>
          <About />
        </Button>
      </NavbarItem>
    </Navbar><div className='revolution'>
      <Image alt={''} src={'/revolution.jpg'} width={200} height={0} />
      As the protests on the finance bill continue, the Youth&apos;s are becoming more aware of the constitiution and matters revolving around governance. They thought we was asleep but we woke <em>ASF</em>. They hitting us but fvck them, we are coming back stronger. The time has come when the youth&apos;s have decided to look out for their future. Don&apos;t ignore, this is the time to drive the change we want to see in our Country. Enough with the hypocricy and mediocricy from the politicians, enough of empty promises and no accountability. This is the GEN-Z REBELLION. REJECT THE FINANCE BILL!
    </div>
    </>
  )
}