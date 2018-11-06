# hackthemidlands2k18

[HackTheMidlands 2018](http://hackthemidlands.co.uk)

---

fully-working end-to-end demo: https://youtu.be/R9K0e9d9gGs

## Inspiration
Trebuchet: the superior siege weapon - although having to fire it yourself is soooo 4th century BC. Introducing the IoT Trebuchet: 'Internet of Flings'.

## What it does
Launch your trebuchet with convenience from anywhere with an internet connection! Type your launch code, hit 'FIRE' and enter your SMS two factor authentication key to fire.

## How we built it
Built from scavenged parts - sponsor freebies (sorry for stealing your pens BT) elastic bands, plastic spoons, and hope. Also duct tape. Lots of duct tape.

The Trebuchet is triggered by a stepper motor hooked up to an Arduino, which in turn is controlled by a laptop. This laptop then takes orders from a webapp via MQTT.

The webapp was built using Angular 6 for the frontend, and Python+Flask, for the backend. It is hosted on Google Cloud with a domain (internet-of-flings.com) from Domain.com. The backend authenticates users with Nexmo's Authentication API!
 
## Challenges we ran into
Finding suitable components and raw materials to use in the construction of the Trebuchet and its launching mechanism. The stepper motors available from MLH were quite weak for our use-case and nothing was available that would properly attach to the motors output shaft and make it more useable in our cobbled together contraption.

Also at 6am a cleaner came and started picking up bits of our project. I was like "uhh we need this" and he was like "whoops sorry I didn't know which parts were rubbish" and I was like "bro same"

## Accomplishments that we're proud of
- Making a Trebuchet that fires without falling apart, despite what it looks like.
- Advancing human stupidity.

## What we learned
With enough persistence, you can make anything out of the random junk floating around at a hackathon, as long as you have plenty of duct tape.

## What's next for Internet-of-Flings
Maybe a more sound Trebuchet, made from real materials. Additional ability to aim the Trebuchet left and right from the webapp.
