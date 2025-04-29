"use client"

import { MleepFarmer } from '@/components/cozy/mleep/farmer'
import { JurtFish } from '@/components/cozy/mleep/jurt-fish'
import { MleepFruit } from '@/components/cozy/mleep/mleep-fruit'
import { Button } from '@/components/ui/button'
import { Gamepad } from 'lucide-react'
import React, { useEffect } from 'react'
import { Dongle } from "next/font/google";
import Link from 'next/link'
import { cn } from '@/lib/utils'
import clsx from 'clsx'
import { Badge } from '@/components/ui/badge'

const dongle = Dongle({ subsets: ["latin"], weight: "400" });

type Props = {}

const score = 20

const items = [
<MleepFruit key={1} />, 
<MleepFruit key={2} />, 
<MleepFruit key={3} />, 
<MleepFruit key={4} />, 
<MleepFruit key={5} />, 
<MleepFruit key={6} />, 
<MleepFruit key={7} />, 
<MleepFruit key={8} />, 
<MleepFruit key={9} />, 
<MleepFruit key={10} />,
]


const GamePage = (props: Props) => {
    const [mleepCount, setMleepCount] = React.useState<number>(1);
    //const [amount, setAmount] = React.useState<number>(1);
    const [credits, setCredits] = React.useState<number>(0)
    const [buy, setBuy] = React.useState<boolean>(false)

    //Increment Mleep fruit credits
    useEffect(() => {
        const id = setInterval(() => setCredits((oldCredits) => oldCredits + mleepCount), 10000);
    
        return () => {
          clearInterval(id);
        };
      }, [mleepCount]);

    //Add Mleep to page
    const addMleepFruit = () => {
        setMleepCount(mleepCount + 1)
        setCredits((oldCredits) => oldCredits - 10)
    }

    //Change Size of Mleep fruit
    const mleepSize = clsx({
        "h-[400px] md:h-[600px] min-w-[250px] md:min-w-[340px]": mleepCount === 1,
        'h-[200px] md:h-[600px] md:min-w-[450px] md:w-[800px]': mleepCount > 1,
    })

    //Change amount of Mleep fruit
    const mleepAmount = clsx({
        "grid-cols-1 grid-rows-1": mleepCount === 1,
        'grid-cols-2 grid-rows-1': mleepCount === 2,
        "grid-cols-3 grid-rows-1": mleepCount === 3,
        'grid-cols-4 grid-rows-1': mleepCount === 4,
        "grid-cols-5 grid-rows-1": mleepCount === 5,
        'grid-cols-5 grid-rows-2': mleepCount > 5,
    })

  return (
    <div className='bg-[#9B8C64] h-[100vh]'>
        <header className='h-10 flex flex-row items-center pt-2.5 px-5 justify-between'>
            <Link href={"/"}>
                <div className='flex flex-row space-x-2 text-2xl md:text-4xl font-extrabold'>
                    <Gamepad className='h-8 w-8 md:h-10 md:w-10'/>
                    Mleep
                </div>
            </Link>
            
            
            <div className='hover:underline grid-rows-2'>
                <Link href="/">
                    Feedback
                </Link> 
            </div>
        </header>
        <div className='relative h-[90vh] w-full'>
            <div className='text-center items-center'>
                    <Badge className='bg-white/10 text-black text-xl'>Mleep Pots: <span className='text-green-800  ml-2 text-3xl'>{mleepCount}</span></Badge>
                    <div className='text-3xl'><Badge className='rounded-full bg-white/10 text-black text-3xl p-2'>{credits}</Badge> Mleep Fruit Picked</div>
                </div>
            <div className={cn('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col ', )}>
                
                
                <div className={cn(mleepSize, 'grid ', mleepAmount)}>

                    <MleepFruit/>
                    {
                        mleepCount>=2 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=3 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=4 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=5 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=6 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=7 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=8 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=9 ? <MleepFruit/> : null
                    }
                    {
                        mleepCount>=10 ? <MleepFruit/> : null
                    }
                </div>
                
            </div>
            <div className='absolute bottom-20 right-5'>
                <JurtFish/>
            </div>
            <div className='absolute bottom-5 left-10'>
                <div className={dongle.className}>
                    {credits>=10 ?
                    <Button onClick={addMleepFruit} variant="mleep" size="mleep" className='rounded-none flex flex-col leading-4 py-3 hover:bg-white/10'>
                        UPGRADE
                        <div>
                            (10 Mleep Fruit)
                        </div>
                    </Button>
                    : null}
                    <MleepFarmer className=''/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default GamePage

