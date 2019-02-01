const express = require('express')
const path = require('path')
const session = require('express-session')

const app = express()
app.set('view engine', 'hbs')


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'something very very secret'
  }));

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/', express.static(path.join(__dirname, 'public_static')))


app.use('/api', require('./routes/api').route)

app.use('/FAQs', express.static(__dirname + '/public_static/faq.html'))
app.use('/aboutus', express.static(__dirname + '/public_static/aboutus.html'))
app.use('/ok/sellusedcars', express.static(__dirname + '/public_static/Sell_Used_Cars'))
app.use('/cartyres', express.static(__dirname + '/public_static/Car_Tyres'))
app.use('/upcomingcars', express.static(__dirname + '/public_static/upcoming_cars.html'))
app.use('/tipsandadvice', express.static(__dirname + '/public_static/Tips_And_Advice.html'))
app.use('/reviews', express.static(__dirname + '/public_static/Customer_Reviews.html'))
app.use('/electricvehicles', express.static(__dirname + '/public_static/Electric_Vehicles.html'))
app.use('/newlaunches', express.static(__dirname + '/public_static/New_Launches.html'))
app.use('/videos', express.static(__dirname + '/public_static/Videos'))
app.use('/brands/bmw', express.static(__dirname + '/public_static/Brands/BMW'))
app.use('/2', express.static(__dirname + '/public_static/page2'))
app.use('/3', express.static(__dirname + '/public_static/page3'))
app.use('/sellusedcars', express.static(__dirname + '/public_static/Sell_Used_Cars'))
app.use('/brands/honda', express.static(__dirname + '/public_static/Brands/Honda'))
app.use('/brands/toyota', express.static(__dirname + '/public_static/Brands/Toyota'))
app.use('/usedcarsindelhi', express.static(__dirname + '/public_static/Used_Cars_In_Delhi/index.html'))
app.use('/usedcarsindelhi/hyundaicreta', express.static(__dirname + '/public_static/Used_Cars_In_Delhi/Hyundai_Creta'))
app.use('/usedcarsindelhi/hyundaiverna', express.static(__dirname + '/public_static/Used_Cars_In_Delhi/Hyundai_Verna'))
app.use('/usedcarsindelhi/jaguarfpace', express.static(__dirname + '/public_static/Used_Cars_In_Delhi/Jaguar_FPace'))

app.use('/usedcarsinmumbai', express.static(__dirname + '/public_static/Used_Cars_In_Mumbai/index.html'))
app.use('/usedcarsinmumbai/hyundaicreta', express.static(__dirname + '/public_static/Used_Cars_In_Mumbai/Hyundai_Creta'))
app.use('/usedcarsinmumbai/hyundaiverna', express.static(__dirname + '/public_static/Used_Cars_In_Mumbai/Hyundai_Verna'))
app.use('/usedcarsinmumbai/jaguarfpace', express.static(__dirname + '/public_static/Used_Cars_In_Mumbai/Jaguar_FPace'))





app.use('/usedcarsinbangalore', express.static(__dirname + '/public_static/Used_Cars_In_Bangalore/index.html'))
app.use('/usedcarsinbangalore/hyundaicreta', express.static(__dirname + '/public_static/Used_Cars_In_Bangalore/Hyundai_Creta'))
app.use('/usedcarsinbangalore/hyundaiverna', express.static(__dirname + '/public_static/Used_Cars_In_Bangalore/Hyundai_Verna'))
app.use('/usedcarsinbangalore/jaguarfpace', express.static(__dirname + '/public_static/Used_Cars_In_Bangalore/Jaguar_FPace'))




app.use('/usedcarsinhyderabad', express.static(__dirname + '/public_static/Used_Cars_In_Hyderabad/index.html'))
app.use('/usedcarsinhyderabad/hyundaicreta', express.static(__dirname + '/public_static/Used_Cars_In_Hyderabad/Hyundai_Creta'))
app.use('/usedcarsinhyderabad/hyundaiverna', express.static(__dirname + '/public_static/Used_Cars_In_Hyderabad/Hyundai_Verna'))
app.use('/usedcarsinhyderabad/jaguarfpace', express.static(__dirname + '/public_static/Used_Cars_In_Hyderabad/Jaguar_FPace'))




app.use('/brands/bmw/bmwx1', express.static(__dirname + '/public_static/Brands/BMW/BMWX1'))
app.use('/VolvoXC40Launch', express.static(__dirname + '/public_static/VolvoXC40Launch'))
app.use('/NextgenerationMercedes-BenzS-Classspottedontest', express.static(__dirname + '/public_static/NextgenerationMercedes-BenzS-Classspottedontest'))
app.use('/DatsunintroducenewextendedwarrantyplaninIndia', express.static(__dirname + '/public_static/DatsunintroducenewextendedwarrantyplaninIndia'))
app.use('/bentletcontinentalgt', express.static(__dirname + '/public_static/Project/A'))
app.use('/Mercedes-BenzC-class', express.static(__dirname + '/public_static/Project/B'))
app.use('/Yaris_vs_Verna_vs_City_vs_Ciaz_comparison', express.static(__dirname + '/public_static/Project/C'))
app.use('/bentely', express.static(__dirname + '/Project1/Bentely'))
app.use('/mercedes', express.static(__dirname + '/Project1/Mercedes'))
app.use('/yaris', express.static(__dirname + '/public_static/Project/C'))
app.use('/audia6', express.static(__dirname + '/Project1/B'))
app.use('/hyundaii20', express.static(__dirname + '/Project1/hyundaii20'))
app.use('/mahindra', express.static(__dirname + '/Project1/C'))
app.use('/tucson_vs_tiguan', express.static(__dirname + '/Project1/D'))
app.use('/yarisvsverna', express.static(__dirname + '/Project1/E'))
app.use('/jeeprenegade', express.static(__dirname + '/Project1/F'))
app.use('/porschecayenneturbo', express.static(__dirname + '/Project1/G'))
app.use('/marutiertiga', express.static(__dirname + '/Project1/H'))
app.use('/audinewq3', express.static(__dirname + '/Project1/I'))
app.use('/duster', express.static(__dirname + '/Project1/J'))
app.use('/volkswagen_T_cross', express.static(__dirname + '/Project1/K'))
app.use('/tata_45_x', express.static(__dirname + '/Project1/L'))  
app.use('/volvo_xc40', express.static(__dirname + '/Project1/M'))  
app.use('/range_rover', express.static(__dirname + '/Project1/N'))  
app.use('/mahindra_tuv', express.static(__dirname + '/Project1/O'))  
app.use('/hyundai_creta', express.static(__dirname + '/Project1/P'))  
app.use('/honda_amaze', express.static(__dirname + '/Project1/Q'))  
app.use('/bmw_m5', express.static(__dirname + '/Project1/R'))  
app.use('/ford_freestyle', express.static(__dirname + '/Project1/S'))  
app.use('/toyota_yaris', express.static(__dirname + '/Project1/T'))  
app.use('/swift', express.static(__dirname + '/Project1/U'))  
app.use('/verna', express.static(__dirname + '/Project1/V'))  
app.use('/creta_vs_captur', express.static(__dirname + '/Project1/W'))  
app.use('/lexus', express.static(__dirname + '/Project1/X'))  
app.use('/Honda_Amaze_AT_vs_Maruti_Suzuki_Dzire_AT', express.static(__dirname + '/Project1/Y'))  
app.use('/Tata_Nexon_XZ_Plus ', express.static(__dirname + '/Project1/Z'))  
app.use('/BMW_630i_GT ', express.static(__dirname + '/Project1/AA'))  
app.use('/Maruti_Brezza_diesel_AMT_vs_Tata_Nexon_diese_AMT', express.static(__dirname + '/Project1/BB'))  
app.use('/brezza', express.static(__dirname + '/Project1/CC'))  
app.use('/2018_Maruti_Swift_vs_Hyundai_Grand_i10', express.static(__dirname + '/Project1/DD'))  
app.use('/audi_q7', express.static(__dirname + '/Project1/EE'))  
app.use('/brands/bmw/BMW3SeriesGT', express.static(__dirname + '/public_static/Project2/BMW3SeriesGT'))  
app.use('/brands/bmw/BMW5Series', express.static(__dirname + '/public_static/Project2/BMW5Series'))  
app.use('/brands/bmw/BMW3Series', express.static(__dirname + '/public_static/Project2/BMW3Series'))  
app.use('/brands/bmw/BMWi8', express.static(__dirname + '/public_static/Project2/BMWi8')) 
app.use('/brands/bmw/BMW7Series', express.static(__dirname + '/public_static/Project2/BMW7Series')) 
app.use('/brands/bmw/BMWX3', express.static(__dirname + '/public_static/Project2/BMWX3')) 
app.use('/brands/bmw/BMWX5', express.static(__dirname + '/public_static/Project2/BMWX5')) 
app.use('/brands/bmw/BMW6SeriesGT', express.static(__dirname + '/public_static/Project2/BMW6SeriesGT')) 
app.use('/brands/bmw/Honda_City', express.static(__dirname + '/public_static/Project2/Honda_City')) 
app.use('/brands/bmw/Honda_WR_V', express.static(__dirname + '/public_static/Project2/Honda_WR_V')) 
app.use('/brands/bmw/Honda_Jazz', express.static(__dirname + '/public_static/Project2/Honda_Jazz')) 
app.use('/brands/bmw/Honda_BR_V', express.static(__dirname + '/public_static/Project2/Honda_BR_V')) 
app.use('/brands/bmw/Honda_Accord', express.static(__dirname + '/public_static/Project2/Honda_Accord')) 
app.use('/brands/bmw/Honda_Civic', express.static(__dirname + '/public_static/Project2/Honda_Civic')) 
app.use('/brands/bmw/Honda_CR_V', express.static(__dirname + '/public_static/Project2/Honda_CR_V')) 
app.use('/brands/bmw/Honda_Jazz_Facelift', express.static(__dirname + '/public_static/Project2/Honda_Jazz_Facelift'))
app.use('/brands/bmw/Toyota_Corolla_Altis', express.static(__dirname + '/public_static/Project2/Toyota_Corolla_Altis'))
app.use('/brands/bmw/Toyota_fhond_Cruiser', express.static(__dirname + '/public_static/Project2/Toyota_Land_Cruiser'))
app.use('/brands/bmw/Toyota_Land_Cruiser_Prado', express.static(__dirname + '/public_static/Project2/Toyota_Land_Cruiser_Prado'))
app.use('/brands/bmw/Toyota_Prius', express.static(__dirname + '/public_static/Project2/Toyota_Prius'))
app.use('/brands/bmw/Hyundai_Elantra', express.static(__dirname + '/public_static/Project2/Hyundai_Elantra'))
app.use('/brands/bmw/Hyundai_Tucson', express.static(__dirname + '/public_static/Project2/Hyundai_Tucson'))
app.use('/brands/bmw/Hyundai_i20_Elite', express.static(__dirname + '/public_static/Project2/Hyundai_i20_Elite'))
app.use('/brands/ford/Ford_Ecosport', express.static(__dirname + '/public_static/Project2/Ford_Ecosport'))


app.use('/privacy_policy', express.static(__dirname + '/public_static/privacy_policy.html'))

app.use('/terms_conditions', express.static(__dirname + '/public_static/terms_conditions.html'))




  app.use('/news', require('./routes/news'));
  app.use('/signup', require('./routes/signup'));
  app.use('/login', require('./routes/login'));
  app.use('/login1', require('./routes/login1'));
  app.use('/login2', require('./routes/login2'));
  app.use('/logout', require('./routes/logout'));
  app.use('/feed', require('./routes/feed'));
  app.use('/feed1', require('./routes/feed1'));
  app.use('/feed2', require('./routes/feed2'));
  app.use('/profile', require('./routes/profile'));
  app.use('/new', require('./routes/root'));
  
  


app.listen(4442, function () {
    console.log("Server started on http://localhost:4442");
});