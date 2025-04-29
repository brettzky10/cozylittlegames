import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

const SmallDefendersPage = () => {
  return (
    <div>
         <Card className='p-5 m-10'>
            <CardHeader>
                Small Defenders
            </CardHeader>
            <CardDescription className='p-5 pb-10'>
                Defend your king from the terrifying average goblin invaders.
            </CardDescription>
            <CardContent>
            <iframe
                src="/unity/index.html"
                className="h-[95vh] flex"
                width="95%"
                height="95%"
                style={{ border: "none", top: 0, left: 0 }}
                allowFullScreen
            />
            </CardContent>
            <CardFooter>
                
                Survive the waves of goblins to win<br/>
                If your King(large unit) dies, you lose<br/>
                Click and hold ground to move in game<br/>
                Click on unit to command<br/>
                Use workers to log trees, mine for gold, and build.<br/>
                <br/>    
                Completely free to play<br/>
                2 levels of 13 complete - April 2025
            </CardFooter>
        </Card>
    </div>
  )
}

export default SmallDefendersPage