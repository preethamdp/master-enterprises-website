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
