import { Injectable } from '@angular/core';
import { data } from './whyUsinterface';



const maindata:data[] = [
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts01.jpg',name:'Fusing Machine Seamless Belts',price:'2,500',des:`Product Details:
  Usage	Industrial
  Material	PTFE
  Color	Black,Brown
  Brand	Master
  Width	200/300/400/500/600/700/800/900/1000 mm
  Length	1360/1660/2450/4800/5100/1540/1840 mm
  Temperature Range (Degree Celsius)	250 Degree C
  Model Number	450/500/600/700/900/1000 mm
  
  We are offering a wide range of Fusing Machine Profile Belt. These belts are fabricated using high-grade raw material and are available in different sizes and dimensions. These profiles can be molded in virtually any configuration for holding, pushing, lifting, or actuating. This makes these profile belts ideal for your assembly, packaging, inserting and other automation equipment applications. Our belts are extensively used in various industries for wide range of applications. We offer this belt in several technical specifications to meet our customers requirement.
  
   
  
  Features:
  
  
  
  Reliable
  
  Precise designs
  
  Fine finish
  
  
  Additional Information:
  
  Item Code: ME03`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts02.jpg',name:'Teflon Belt',price:'70',des:`Product Details:
  Minimum Order Quantity	01 Piece
  Packaging Type	good Quality of packaging
  Belt Width	10mm, 12mm.15mm
  Thickness	2.5
  Length	As per your requirements
  Color	Brown
  Brand	Master
  Material	Teflon
  Operating Temperature Range	250 degree
  Size	As Per your requirements
  Country of Origin	Made in India
  
  This belts we are using in manufacturing for dairy products. It is available as per your requirements sizes. Belt Quality also strong.
  
  Additional Information:
  
  Item Code: ME00008
  Production Capacity: Strong
  Delivery Time: Immediately after confirmation
  Packaging Details: Good Packing & Courier Service also there.`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts03.jpg',name:'Fusing Machine Conveyor Belts',price:'2,000',des:`Product Details:
  Minimum Order Quantity	1 Unit
  Packaging Type	Box
  Belt Width	450MM,500MM,600MM,700MM,800MM,900MM,1000MM
  Thickness	2.5MM,3.5MM
  Length	1000MM TO 5000MML
  Brand	MASTER
  
  This belts are uses in Fusign Machine like Hashima, Oshima, Kannegiesser, Reliant,Kumsung , Fiblon Fusign machines.
  
  Additional Information:
  
  Item Code: 0002
  Production Capacity: 250 c
  Delivery Time: immediately after confirmation order
  Packaging Details: We are done good packing for belts`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts04.jpg',name:'Fusing Machine Needle Detector Belts',price:'2,500',des:`Product Details:
  Usage	Industrial
  Brand	HASHIMA
  Model	HASHIMA HN740G
  Color	WHITE
  
  Due to our expertise, we are offering a superior quality array of Fusing Machine Needle Detector Belts to our valuable patrons. Offered belts are highly praised specially when used as feed belts, telescopic, packing belt and weighing. High quality material is used for designing these belts which we have sourced from certified vendors of the market. We offer these belts in both customized as well as standard options.
  
  Features:
  
  Reliability
  Longer service life
  Low operating cost
  
  Additional Information:
  
  Item Code: ME09
  Pay Mode Terms: T/T (Bank Transfer)
  Port of Dispatch: BANGALORE
  Delivery Time: 1DAY
  Packaging Details: GOOD PACKING WITH NEATNESS`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts05.jpg',name:'Fusing Machine Rivet Belts',price:'1,200',des:`Product Details:
  Minimum Order Quantity	1 Piece
  Packaging Type	Box
  Brand	Master
  Length	24 Inch
  Thickness	5-10 mm
  
  We are offering a wide array of Fusing Machine Rivet Belt. Our entire range of products is made and designed using high quality of raw materials and thus offers a long lasting and durable performance to the customers in the market. These Rivet Belts are known for their dimensional stability, high wear resistance and low noise. Available in standard specifications, we also custom designed as per the requirements of our clients at market leading prices.
  
   
  
  Features:
  Beautifully designed
  Made in India`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts06.jpg',name:'Fusing Machine Profile Belts',price:' 2,500',des:`Product Details:
  Color	Green
  Usage/Application	Industrial
  Packaging Type	Roll
  Brand	Master
  
  We are offering a wide range of Fusing Machine Profile Belt. These belts are fabricated using high-grade raw material and are available in different sizes and dimensions. These profiles can be molded in virtually any configuration for holding, pushing, lifting, or actuating. This makes these profile belts ideal for your assembly, packaging, inserting and other automation equipment applications. Our belts are extensively used in various industries for wide range of applications. We offer this belt in several technical specifications to meet our customers requirement.
  
   
  
  Features:
  
  
  
  Reliable
  
  Precise designs
  
  Fine finish`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts07.jpg',name:'Seamless Fabric Conveyor Belts',price:' 1,500',des:`Product Details:
  Brand	Master
  Material	Nylon
  Width	30 - 84 Inch
  Pack Size	100 Meter
  
  We are manufacturing for all type of fusing machines Seamless belts, Jointed belts, Kevlar Belts, Revit Belts, Profile belts like,
  
  Additional Information:
  
  Packaging Details: with good quality of cotton box packing`},
  {id:'fb',unit : 'unit',img : './../assets/fusingbelts08.jpg',name:'PTFT Conveyor Belt',price:' 2,000',des:`This belts are uses in Fusign Machine like Hashima, Oshima, Kannegiesser, Reliant,Kumsung , Fiblon Fusign machines.`},
  {id:'cb',unit : 'As Per Machine Models',img : './../assets/convbelt01.jpg',name:'Teflon Fabric Conveyor Belt',
  price:'2,500',des:`
  Product Details:
  Minimum Order Quantity	1 As Per Machine Models
  Brand	FF 900/FF600/ FF 1000
  Size	600/900/1000
  Max Temperature (degree Celsius)	250 degree Celsius
  Voltage (V)	220v
  Packaging Type	BOX
  Belt Width	200, 300, 400, 500, 600, 700, 800, 900, & 1000MM
  Thickness	1.2MMW
  Length	1000, 2000, 3000, 4000, 5000, 10000MML
  Structure	Belt Conveyor
  Thickness (mm)	1mm
  Type	General Purpose Belts
  Machine Type	Manual
  Condition	New
  Phase	3 PHASE
  Automation Grade	Manual, Semi-Automatic
  Weight (kg)	250
  Max Fabric Width	0-500 mm, 500-1000 mm
  Packaging Type	GOOD QUALITY PACKING
  Heating Time (sec.)	12.7m/min
  Model Name	FUTURE FUSING
  Warranty	1 YEAR
  Color	Black, Brown, white
  Color	WHITE WITH BLUE
  Brand	MASTER
  Material	METEL SHEET
  Material	PVC, PTFE, SEAMLESS, JOINTED, REVIT,KEVLAR, PROFILE
  
  We are manufacturing for all type of Fabric conveyor belts. Used for Garment industries, Food Industries, Chemical Industry, Packing Industris, Plastic Industries.
  
  Additional Information:
  
  Item Code: ME10
  Pay Mode Terms: T/T (Bank Transfer),T/T (Bank Transfer)
  Port of Dispatch: BANGALORE
  Production Capacity: 1000
  Delivery Time: 1 DAY
  Packaging Details: GOOD QUALITY OF PRODUCT`},
  {id:'cb',unit : 'unit',img : './../assets/convbelt02.jpg',name:'PVC Conveyor Belt',
  price:'700',des:`
  Product Details:
Minimum Order Quantity	1 Unit
Country of Origin	Made in India
Material	PVC
Belt Width	40 - 100 mm
Belt Thickness	2 - 5 mm
Features	Heat Resistant
Application Area	Rice Mill And Food Industry

We are manufacturing for all type of Fabric conveyor belts. Used for Garment industries, Food Industries, Chemical Industry, Packing Industris, Plastic Industries.

Additional Information:

Item Code: ME0007
Production Capacity: STRONG
Delivery Time: 1 DAY AFTER CONFIRMATION ORDER
Packaging Details: We deal in the best quality Conveyor Belt in the market. Our Product Good Quality & Good Condition.
`},
{id:'cb',unit : 'Square Feet',img : './../assets/convbelt03.jpg',name:'Fusing Machine Conveyor Belt',
price:'1,500 ',des:`
Product Details:
Belt Thickness	2 - 5 mm
Usage/Application	Industrial
Operating Temperature Range	-40 - 60 Degree C
Packaging Type	Roll

Our is the supreme quality range of Fusing Machine Conveyor Belt. These belts are widely used for a variety of apparel and industrial fusing as well as laminating applications. Our belts are tested for quality by our quality control supervisors in order to ensure that we deliver only the best quality products to our esteemed clients. These Fusing Machine Conveyor Belts are offered at industry leading rates.

Features:

High tensile strength
Resistant to high temperature
Low maintenance
`},
{id:'cb',unit : ' Meter',img : './../assets/convbelt04.jpg',name:'Coated Mesh Fabric Conveyor Belts',
price:'350',des:`
Product Details:
Brand	Master
Thickness	5-10 mm
Width	35 Inch

With the aid of modern machinery and ultra-modern technology, we have been able to manufacture Coated Mesh Fabric Conveyor Belts. Our offered belts are developed in variegated designs and sizes to meet the diverse demands of clients. Moreover, we manufacture the entire range keeping in mind the industry set norms and guidelines.

Features:

Lightweight
Sturdy design
Longer life
`},
{id:'bcp',unit : 'Gram',img : './../assets/beltclean01.jpeg',name:'Fusing MC Belt Cleaning Powder',
price:'260',des:`
Product Details:
Brand	RESIN X
Pack Type	Bottle
Pack Size	250grms
Form	Powder

Keeping in mind the diverse requirements of our clients we are involved in offering to our clients a wide range of Fusing MC Belt Cleaning Powder. These are highly reckoned among our clients due to their excellent quality and are made using best quality material and advanced technology. These are easy to apply and are available in market in customized packing as per the clients requirements. We also assure timely delivery of our products.

 

Features:

 

Reliable
Best quality
Cost effective

Additional Information:

Item Code: ME07
Pay Mode Terms: T/T (Bank Transfer)
Delivery Time: 1 DAY
Packaging Details: GOOD QUALITY OF PACKING
`},
{id:'bcp',unit : 'Gram',img : './../assets/beltclean02.jpeg',name:'Rollax Belt Cleaning Powder',
price:'300',des:`
Product Details:
Brand	ROLLAX / RESIN -X
Pack Type	Bottole
Pack Size	250grms
Form	Powder

To furnish the diverse requirements of our clients in the best possible manner we are involved in offering a wide array of Rollax Belt Cleaning Powder. We assure our clients to deliver a quality tested array of our products after checking their quality under rigorous parameters. These are widely used for cleaning of belts and are very reliable in nature. Moreover, these can be availed at industry leading prices.

 

Features:

 

Superior quality
Timely delivery
Affordable rates

Additional Information:

Item Code: ME06
Pay Mode Terms: T/T (Bank Transfer)
Port of Dispatch: BANGALORE
Delivery Time: 1 DAY
Packaging Details: GOOD QUALITY PACKING
`},
{id:'bcp',unit : 'Gram',img : './../assets/beltclean03.jpeg',name:'Belt Cleaning Powder',
price:'250 ',des:`
Product Details:
Brand	Master
Form	Powder
Pack Size	250 gm
Pack Type	Bottle

Belt Cleaning Powder create a clean, slick surface from which debris and residue easily wipes with a soft cloth. This reduces wear and tear on the belts and prevents residue from building up over time. Abrasive scrubbing materials will reduce the life of your belts and aggravate residue build up by creating a rough surface to which residue sticks easily. Cleaning powders reduce the sticky interlining residue that causes fusing machines to jam and eliminates potential residue stains on the fabric surface. The conditioning effects of cleaning powder are long-lasting. Cleaning powders instantly become a clear liquid upon contact with any Teflon coated fusing surface at operating temperature.

 

Features:



Longer shelf life
Accurate composition
High precise composition
`},
{id:'ir',unit : 'Piece',img : './../assets/ir01.jpg',name:'Industrial Relays',
price:'350 ',des:`
Product Details:
Type	Current Relay
Brand	Master
Relay Type	APFC Relay
Packaging Type	Box

Being counted amongst the leading companies we are involved in offering an extensive range of Industrial Relays. These are highly reckoned among our clients due to their fine finishing and best performance. These are developed using fine quality material and advanced technology to meet the diverse requirements of our clients. Besides, we also assure timely delivery of our products.

 

Features:

 

Long life
Superior quality
High strength
 

Applications:

 

For monitoring balanced or unbalanced supplies
`},
{id:'ir',unit : 'Piece',img : './../assets/ir02.jpg',name:'SSR Relays',
price:'750 ',des:`
Product Details:
Brand	Master
Parts	Relay Board
Voltage Type	AC
Mounting	PCB Mounting

We are counted amongst the leading companies involved in offering a wide assortment of SSR Relays. These are extensively used in deliberator and other high voltage purposes. These are well known in market due to their fine finishing and trouble free performance. Additionally, we also assure to deliver a defect free range of our products in a fixed time frame.


Features:

 

Excellent finishing
Reliable
Wisely used
`},
{id:'fm',unit : 'Piece',img : './../assets/fm01.jpg',name:'Fusing Machine - FF 250, FF 450, FF 600, FF 900 Fusing Machines',
price:'90,000',des:`
Product Details:
Minimum Order Quantity	1 Piece
Model Number	FF 250LF/300LF/450LF/600LF/900LF
Product Type	FUTURE FUSING
Brand	FUTURE FUSING,FF 900/FF600/ FF 1000
Power Consumption	220v
Size	250MMW /300MMW/450MMW/600MMW/900MMW/1000MMW,600/900/1000
Fusing Time Adjustable (sec.)	8 SCE
Max Temperature (degree Celsius)	250 degree Celsius
Voltage	220v
Driven Type	DRIVING MOTOR 200W
Machine Type	Manual
Condition	New
Phase	3 PHASE
Automation Grade	Semi-Automatic, Manual
Max Fabric Width	0-500 mm, 500-1000 mm
Weight (kg)	350,250
Packaging Type	GOOD QUALITY PACKING
Pressure (kg per square cm)	0-0.5M pa
Heating Time (sec.)	6.28SEC,12.7m/min
Pressure Adjustable	Kneumatically
Model Name	FF200/FF300/FF450/FF600/FF900/ME 250/ME300/ME450,FUTURE FUSING
Warranty	1 YEAR
Number Of Phase	3 PHASE
Belt Speed (m per min.)	12.7m/min
Color	BLUE WITH WHITE,WHITE WITH BLUE
Material	IRON,METEL SHEET

We offer good quality of Fusing Machine like FF 250, FF 450, FF600 & FF 900 FUSING MACHINES. This machines is giving good quality of fusing & good productoon.

Additional Information:

Item Code: FF02
Pay Mode Terms: T/T (Bank Transfer)
Port of Dispatch: ROAD, AIR
Production Capacity: 2000 PIECE
Delivery Time: 3 DAYS
`},
{id:'dt',unit : 'Piece',img : './../assets/dt01.jpg',name:'Digital Thermometer - Non Contact Digital Thermometer',
price:'2,500',des:`
Product Details:
Minimum Order Quantity	1 Piece
Brand	BLUNT BIRD
Model Name/Number	BLUNT BIRD
Model	MASTER
Temperature Range	320 Degree
Usage/Application	Laboratory
Material	Plastic
Color	White
Thermometer Type	Infrared Thermometers
Display Type	Digital

By capitalizing the skills of our professionals, we are able to provide quality approved Non Contact  Digital Thermometer, with Laser Pointer for using Covid 19 Body check up purpose.

Features:

Rugged and ergonomic design for general purposes
Extended long time measuring reliability
Backlit LCD display
Switchable On/Off laser sighting
Distance-to-spot ratio of 8:1 is suitable for most consumer and commercial applications
Extended long time measuring reliability
Range: -4 to 604 Deg F (0 to 320 Deg C )
MFG Model # BLUNT BIRD 

Additional Information:

Delivery Time: IMMEDIATELY
Packaging Details: VERY GOOD PACKAGING WITH INSTRUCTION CARD
`},
{id:'fgc',unit : 'Piece',img : './../assets/fgc01.jpg',name:'Food Grade conveyor belts - Leno PTFE 4by4 Mesh Fabric Conveyor Belt',
price:'525',des:`
Product Details:
Minimum Order Quantity	1 Square Meter
Belt Thickness	2 - 5 mm
Thickness	0.13mm,1mm,2mm
Width	35-36"
Features	Heat Resistant
Structure	Belt Conveyor
Brand	MASTER
Color	Block,Brown
Country of Origin	Made in India
Belt Width	500 - 1000 mm

PTFE Mesh Conveyor Belt
Teflon mesh belt is made of fiberglass mesh impregnating with suspended PTFE emulsion which is a new composite products with high performance and multi-purpose.

High temperature resistance – working range: -70??????260???.
Non-sticky, stains can be easily removed.
Chemical resistance, resisting all kinds of organic solvent.
Good dimensional stability, high strength, excellent mechanical properties.
Anti bending fatigue, can be used for smaller wheel diameter.
Drug resistance, non-toxic. Resistant to almost all pharmaceutical items.
Fire retardant.
Air permeability, reducing heat consumption, improving drying efficiency.
Main mesh size: 1mm*1mm, 2mm*2.5mm, 4mm*4mm and 10mm*10mm

Color: Brown, Black or Beige

Size can be customized , please contact us to get more information . you can leave a message, we will contact you as soon as possible

 

 

PACKING

Release tape for protection of heat-sealing wires and jaws in shrink-wrapping operations.

Release fabric and tape for blister pack packaging.

 

 

 

 

TEXTILE

Belts for thermal bonding of non-woven fibers (automotive)

Belts for cloth finishing calendaring and folding.

Release fabric/tape for protective covering of dry can cylinders and drums.

Process belts for thermal bonding of fusible interlinings. Shirt collars/suit linings/transfers.

 

 

 

 

SEALING

Release belts for sealing of the side and base of plastic wrapped packaging.

Release tape for vertical form fill seal machines and vacuum packaging.

 

 

 

 

PRINTING

Tape for silkscreen table covers

Print dryer belts for T-Shirts/Paper/Card/Metal/Wood/Glass/Plastic Parts

Feed and Take off belts (polyester)

Belts for drying ink & solder on printed circuit boards.

Screen-Print Drying

 

 

 

 

FOOD

Release fabric for lining of baking trays/dough and meat.

Process belts for dough pressing/tortillas/pita bread

Process belts for frying/drying and curing of meats and comestibles.

Process belts for freezing of meats/ice cream.

 

 

 

 

SOLAR ENERGY

Release fabrics for multi-daylight press and laminating machine.

 

 

 

 

PLASTICS

Release fabric for hot plate welding of plastics (UPVC, white goods & automotive).

Release fabric for H.F.& I.R.Welding.

Release fabric for polythene/PU extrusion coating.

Release fabric/tape for welding of polythene bags/sacks.

Plastic/Window Welding

 

 

 

 

CURING

Process belts for curing of rubber extrusion.

Process belts for curing and impression of PVC backed carpets and underlay.

Release fabric for forming of rubber backed mats, bitumen and ceramic tiles.

Release belts for curing of hot melt adhesives and adhesive tapes.

Release fabric for curing of abrasive wheel discs.

 

 


 


Additional Information:

Delivery Time: 1 day after confirmation of order
`},
{id:'cfm',unit : 'Piece',img : './../assets/cfm01.jpg',name:'Conveyor Type Fusing Machine - Fusing Machine Feed On Conveyor Attachment',
price:'90,000 ',des:`
Product Details:
Minimum Order Quantity	1 Piece
Brand	FF 900/FF600/ FF 1000
Size	600/900/1000
Max Temperature (degree Celsius)	250 degree Celsius
Voltage (V)	220v
Machine Type	Manual
Condition	New
Phase	3 PHASE
Automation Grade	Semi-Automatic, Manual
Max Fabric Width	500-1000 mm, 0-500 mm
Weight (kg)	250
Packaging Type	GOOD QUALITY PACKING
Heating Time (sec.)	12.7m/min
Model Name	FUTURE FUSING
Warranty	1 YEAR
Color	WHITE WITH BLUE
Material	METEL SHEET

Feed on conveyors using in Fusing Machine attachments. This Conveyor helps to more production capacity & Minimise the labour & Power Quantity.

Additional Information:

Item Code: ME11
Pay Mode Terms: T/T (Bank Transfer),T/T (Bank Transfer)
Port of Dispatch: BANGALORE
Production Capacity: 250 degree
Delivery Time: 5 DAYS
Packaging Details: GOOD PACKING
`},
{id:'ib',unit : 'Piece',img : './../assets/ib01.jfif',name:'Industrial Belts - Food Grade 2Ply Belts',
price:'2,000 ',des:`
Product Details:
Minimum Order Quantity	1 Piece
Country of Origin	Made in India
Material	2Ply
Belt Width	100 - 500 mm
Features	Heat Resistant
Application Area	Chapathi and Pappad Making units
Working Temperature	250 Degree
Length Of Belt	1540/1840

This Belt used For chapati & Pappad Making belts. It Helps to Dry  Quickly Pappad. Its Availale your requirment size. We will give immediate delivery to confirmation order.

It is good packing & Quality of belts.

Additional Information:

Item Code: ME00006
Production Capacity: 250
Delivery Time: Immediately
Packaging Details: Good Packaging
`},
{id:'kb',unit : 'Roll',img : './../assets/kb01.jpg',name:'Kevlar Belts',
price:'1,500 ',des:`
Product Details:
Material	Carbon Steel
Belt Thickness	2 - 5 mm
Pack Type	Roll
Width	30 Inch

On the offering from our organization is a quality range of Kevlar Belts. All these products are manufactured in accordance with the norms and standards already laid by the industry. A team of deft experts monitor every stage of production, in order to maintain quality standard of the product.

Features:

High tensile strength
Resistant to high temperature
Low maintenance
`},
{id:'bs',unit : 'Piece',img : './../assets/bs01.jpg',name:'Bond Strength Digital Meter',
price:'2,200 ',des:`
Product Details:
Minimum Order Quantity	1 Piece
Brand	FF 900/FF600/ FF 1000
Size	600/900/1000
Max Temperature (degree Celsius)	250 degree Celsius
Voltage (V)	220v
Model Name/Number	ME12
Temperature Range	-30 to 50 Degree C
Usage/Application	Industrial
Machine Type	Manual
Condition	New
Phase	3 PHASE
Automation Grade	Semi-Automatic, Manual
Weight (kg)	250
Max Fabric Width	0-500 mm, 500-1000 mm
Packaging Type	GOOD QUALITY PACKING
Heating Time (sec.)	12.7m/min
Model Name	FUTURE FUSING
Warranty	1 YEAR
Brand	Master
Color	WHITE WITH BLUE
Material	METEL SHEET
Pack Type	Box.
Display Type	Digital

Lab-fine instruments has developed a Bond Strength Digital Meter strength tester for the packaging industries. This main application of this instrument is for testing the strength of adhesives.Features: Strong constructionExcellent performanceLonger service life

Additional Information:

Pay Mode Terms: T/T (Bank Transfer)
Delivery Time: 1
Packaging Details: BOX
`},
{id:'fmsr',unit : 'As per Machine Models',img : './../assets/fmsr01.jpg',name:'Fusing Machine Silicone Rollers',
price:'2,500 ',des:`
Product Details:
Minimum Order Quantity	01 As per Machine Models
Usage/Application	Conveyors Industry
Hardness	01MM
Roller Length	200-300 mm, 400-500 mm, 0-100 mm, 100-200 mm, 300-400 mm, >500 mm
Brand	MASTER
Roller Surface	Silicone Rubber
Roller Diameter	50-100 mm, 100-200 mm, 0-50 mm
Color	brown, pink
Roller Work Nature	Wetting With Rubber
Features	IT IS USES FOR FUSING MACHINES
Packaging Type	CORTON AND WOODEN BOX
Temperature Resistance	500C
Working Temperature	500C

Fusing Machine Silicone Rollers is used in garment industries for making good quality of fusing.We offer roller for hashima, oshima, fiblon, kannegiesser, meyer, Reliant, Infocus, Shinko sumit, KumsungFeatures:Excellent textureFree from defectsLight weight

Additional Information:

Item Code: ME05
Pay Mode Terms: T/T (Bank Transfer)
Port of Dispatch: BANGALORE
Production Capacity: 500 degree
Delivery Time: 1 DAY
Packaging Details: GOOD QUALITY PACKING
`},
{id:'em',unit : 'Piece',img : './../assets/em01.jpeg',name:'Energy Meters - Fusing Machine Limit Switches, Micro Switches',
price:'250 ',des:`
Product Details:
Minimum Order Quantity	1 Piece
Switch Type	Rotary Limit Switch, Micro Limit Switch
Model Name/Number	omron
Brand	Omron,FF 900/FF600/ FF 1000
Size	600/900/1000
Max Temperature (degree Celsius)	250 degree Celsius
Voltage (V)	220v
Machine Type	Manual
Condition	New
Power/Voltage (V)	220V
Phase	3 PHASE
Automation Grade	Semi-Automatic, Manual
Weight (kg)	250
Max Fabric Width	0-500 mm, 500-1000 mm
Packaging Type	GOOD QUALITY PACKING
Heating Time (sec.)	12.7m/min
Model Name	FUTURE FUSING
Warranty	1 YEAR
Color	WHITE WITH BLUE
Material	METEL SHEET
Usage/Application	FUSING MACHINES

This Limit Swithces uses for Fusing Machines tracking system. 
We offer best quality of omrom brand.

Additional Information:

Item Code: ME08
Pay Mode Terms: T/T (Bank Transfer),T/T (Bank Transfer)
Port of Dispatch: BANGALORE
Delivery Time: 1 DAY
Packaging Details: GOOD QUALITY PACKING
`},
{id:'utc',unit : 'Piece',img : './../assets/utc01.jpg',name:'Uv Test Chamber - MULTIFUNCTIONAL DISINFECTION BOX',
price:'2,500 ',des:`
Product Details:
Minimum Order Quantity	01 Piece
Power	5V2A
Tube Material	PC+ABS
Material	MS
Brand	LFX-168
Application	MULTIFUNCTIONAL DISINECTION AND STERILIZATION
Warranty	6 MONTHS
Size	220*120*66MM
Light Type	UV LED
Wavelength	2-6MM

Sterilization of mobile, elctronics product.
The Mask can be used after disinfection.
Use of Bank Note to elemet bactirias.
Cusmatics, Jewellary Sterilization

Additional Information:

Production Capacity: 3W, 78%CHARGING EFFICIENCY
Delivery Time: IMMEDIATELY
Packaging Details: Good Packing matrial
`},
{id:'gm',unit : 'Piece',img : './../assets/gm.jpeg',name:'Gear Motor',
price:'7,500 ',des:`
Product Details:
Usage/Application	Industrial
Phase	Three Phase, Single Phase
Brand	Panasonic
Pack Type	Box

For the diverse requirements of our clients we are involved in offering an extensive range of Gear Motor. These are manufactured using best quality material and advanced technology under the strict guidance of our experts. These are available in various specifications as per the customers needs and require less maintenance. In addition, we offer our products at very reasonable prices.

 

Features:

 

Highly demanded
High durability
Reliable
`},
{id:'tc',unit : 'Piece',img : './../assets/tc.jpg',name:'Thermo Couple',
price:'750',des:`
Product Details:
Product Type	K Type
Brand	Master
Usage/Application	Industrial
Pack Type	Box

Under the specified category of industrial products, we have introduced Thermo Couple. These products are designed & developed under the strict surveillance of our expert professionals and thus, are imparted with flawless configuration. Easy to install and compact in size, offered range of thermo couples have gained immense fame in the market and can be purchased at reasonable rates.

Features:

Anti-corrosive
Compact design
Easy to install
`},
]
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  getAlldata(){
    return maindata;
  }
  getSpecificdata(pname){
    for(let val of maindata){
      if (val.name == pname){
        console.log(val)
        return val
      }
      
    }
  }



}
