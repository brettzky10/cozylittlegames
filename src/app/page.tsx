import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Card>
          <CardHeader>
            <CardTitle>Cozy Defend</CardTitle>
            <CardDescription>
            Defend the castle from the ugly goblin race.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 ">
          <iframe
              src="/unity/index.html"
              className="h-[95vh] flex"
              width="95%"
              height="95%"
              style={{border: "none", top: 0, left: 0}}
              allowFullScreen
            />

          </CardContent>
          <CardFooter>
            <Button disabled>Save changes</Button>
          </CardFooter>
        </Card>
    </div>
  );
}
