const graphql = require('graphql')
const {GraphQLObjectType, GraphQLNonNull, GraphQLBoolean,GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema} = graphql
const mongoose = require('mongoose');

 const typeUser = new GraphQLObjectType({
  name:'User',
  fields:{
        user_id: {type:GraphQLID},
        firstname: {type: GraphQLString},
        surname:{type:GraphQLString},
        date_of_birth:{type:GraphQLString},
        id_type:{type:GraphQLString},
        image:{type:GraphQLString },
        id_number:{type:GraphQLString},
        gender:{type:GraphQLString},
        region:{type:GraphQLString},
        email:{type:GraphQLString},
        digital_addr:{type:GraphQLString},
        phone:{type:GraphQLString},
        password:{type:GraphQLString}
  }
    })
    
   const  typeDevice  = new GraphQLObjectType({
       name:'Device',
       fields:{    
        device_type: {type:GraphQLString},
        device_name: {type:GraphQLString},
        price: {type:GraphQLString},
        and_or_ios_version:{type:GraphQLString},
        description:{type:GraphQLString},
        ram_size:{type:GraphQLString},
        image:{type:GraphQLString},
        memory_size:{type:GraphQLString},
        device_color:{type:GraphQLString},
        device_image:{type:GraphQLString},
         posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          //return [{'A User is Here'}]
         }
        }     
    }})
    
   const  typeFashion = new GraphQLObjectType({
    name:'Fashion',
    fields:{
        
        item_name:{type:GraphQLString},
        item_price:{type:GraphQLString},
        number_in_stock: {type:GraphQLInt},
        gender_target:{type:GraphQLString},
      available_colors:{type: GraphQLString},
        size_range:{type:GraphQLString},
        item_category:{type:GraphQLString},
        description:{type:GraphQLString},
        item_tag:{type:GraphQLString},
         posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          return 'A User is Here'
         }
        }
        
    }})
    
    const typeProperty = new GraphQLObjectType ({
     name:'Property',
     fields:{
        
        property_type:{type:GraphQLString},
        property_name:{type:GraphQLString},
        property_location:{type:GraphQLString},
        property_price:{type:GraphQLString},
        property_registered:{type: GraphQLBoolean},
        property_description:{type:GraphQLString},
         posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          return 'A User is Here'
         }
        }
    }})
    
    const typeAnimal = new GraphQLObjectType({
     name:'Animal',
     fields:{
        animal_name:{type:GraphQLString},
        number_available:{type: GraphQLInt},
        price:{type:GraphQLString},
        description:{type:GraphQLString},
        posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          return 'A User is Here'
         }
        }
    }})
    
   const  typeBook = new GraphQLObjectType ({
    name:'Book',
    fields:{
        book_title:{type:GraphQLString},
        book_price:{type:GraphQLString},
        book_genre:{type:GraphQLString},
        date_published:{type:GraphQLString},
        name_of_author:{type:GraphQLString},
        number_available:{type:GraphQLInt},
        book_description:{type:GraphQLString},
        posted_by:{
         type:typeUser,
        resolve:(source, param) => {
          return 'A User is Here'
        }
    }}})
    
    const typeService = new GraphQLObjectType({
     name: 'Service',
     fields:{
        service_name:{type:GraphQLString},
        service_location:{type:GraphQLString},
        service_tag:{type:GraphQLString},
        service_duration:{type:GraphQLString},
        service_price:{type:GraphQLString},
        service_description:{type:GraphQLString},
        posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          return 'A User is Here'
         }
        }
    }})
    
 const  typeVacancy = new GraphQLObjectType({
  name:'Vacancy',
  fields:{
        vacn_title:{type:GraphQLString},
        vacn_location:{type:GraphQLString},
        vacn_tag:{type:GraphQLString},
        vacn_duration:{type:GraphQLString},
        vacn_price:{type:GraphQLString},
        vacn_description:{type:GraphQLString},
        posted_by:{
         type: typeUser,
         resolve:(source, params) => {
          return 'A User is Here'
         }
        }
    }})
 
 
 const typeQuery = new GraphQLObjectType({
  name: 'Query',
  fields:{
    user:{
     type: typeUser,
       args:{id:{type: GraphQLID}},
       resolve:(source, {id}) => {
      return 'Some Random User Details Here'
     }
    },
    login:{
      type: typeUser,
      args:{email:{type: GraphQLString}, password:{type: GraphQLString}},
      resolve:(parent, args) => {
       return "We will login in Here"
      }
    },
    devices:{
      type:GraphQLList(typeDevice),
      resolve:() => {
       return 'A List Of Devices Here'
      }
    },
    get_phones:{
      type: GraphQLList(typeDevice),
      resolve:() => {
        return 'Get All Phones Queries'
      }
    },
    device:{
     type:typeDevice,
     args:{id:{type:GraphQLID}},
     resolve:(source, {id}) => {
      return id
     }
    },
    fashion_data:{
     type:GraphQLList(typeFashion),
     resolve:() => {
      return 'A list of all Fashion Data'
     }
    },
    fashion_item:{
     type: typeFashion,
     args:{id:{type:GraphQLID}},
     resolve:(source, {id}) => {
      return 'A Single Fashion Object'
     }
    },
    services:{
     type:GraphQLList(typeService),
     resolve:() => {
      return 'A list of Services Here'
     }
    },
    
    service:{
     type:typeService,
     args:{id:{type:GraphQLID}},
     resolve:(source, id) => {
      return 'A Single Service Here'
     }
    },
    
    allpets:{
     type: GraphQLList(typeAnimal),
     resolve:() => {
      return 'A list of Animals'
     }
    },
    pet:{
     type: typeAnimal,
     args:{id:{type:GraphQLID}},
     resolve:(source, {id}) => {
      return 'A List Of Pets Here'
     }
    },
    vacancies:{
     type:GraphQLList(typeVacancy),
     resolve:() => {
      return 'Vacancies Here'
     }
    },
    vacancy:{
     type:typeVacancy,
  
     args:{id:{type:GraphQLID}},
     resolve:(source,{id}) => {
      return 'Vacancies Here'
     }
    }
    
    
    
  }
 })
 
 const typeMutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
   addUser:{
    type: typeUser,
    args:{
     firstname:{type: new GraphQLNonNull(GraphQLString)},
     surname:{type:new GraphQLNonNull(GraphQLString)},
     date_of_birth:{type:new GraphQLNonNull(GraphQLString)},
     id_type:{type:new GraphQLNonNull(GraphQLString)},
     //image:{type:new GraphQLNonNull(GraphQLString) },
     id_number:{type:new GraphQLNonNull(GraphQLString)},
     gender:{type:new GraphQLNonNull(GraphQLString)},
     region:{type:new GraphQLNonNull(GraphQLString)},
     email:{type:new GraphQLNonNull(GraphQLString)},
     digital_addr:{type:new GraphQLNonNull(GraphQLString)},
     phone:{type:new GraphQLNonNull(GraphQLString)},
     password:{type:new GraphQLNonNull(GraphQLString)}

     },
     resolve: (source, args) => {
        console.log(args);
       }
   },
   addDevice:{
    type: typeDevice,
    args:{
      device_type:{type:new GraphQLNonNull(GraphQLString)},
      device_name: {type:new GraphQLNonNull(GraphQLString)},
      price: {type:new GraphQLNonNull(GraphQLString)},
      and_or_ios_version:{type:new GraphQLNonNull(GraphQLString)},
      description:{type:new GraphQLNonNull(GraphQLString)},
      ram_size:{type:new GraphQLNonNull(GraphQLString)},
      memory_size:{type:new GraphQLNonNull(GraphQLString)},
      device_color:{type:new GraphQLNonNull(GraphQLString)},
      // device_image:{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve:(source, args) => {
     console.log(args)
    }
   },
   
   addService:{
    type: typeService,
    args:{
      service_name:{type:new GraphQLNonNull(GraphQLString)},
      service_location:{type:new GraphQLNonNull(GraphQLString)},
      service_tag:{type:new GraphQLNonNull(GraphQLString)},
      service_duration:{type:new GraphQLNonNull(GraphQLString)},
      service_price:{type:new GraphQLNonNull(GraphQLString)},
      service_description:{type:new GraphQLNonNull(GraphQLString)},
    },
    resolve:(source, args) => {
     console.log(args)
    }
   },
   
   addBook:{
    type: typeBook,
    args:{
      book_title:{type:new GraphQLNonNull(GraphQLString)},
      book_price:{type:new GraphQLNonNull(GraphQLString)},
      book_genre:{type:new GraphQLNonNull(GraphQLString)},
      date_published:{type:new GraphQLNonNull(GraphQLString)},
      name_of_author:{type:new GraphQLNonNull(GraphQLString)},
      number_available:{type: new GraphQLNonNull(GraphQLInt)},
      book_description:{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve:(source, args) => {
     console.log(args)
    }
   },
   
   addVacancy:{
    type: typeVacancy,
    resolve:(source, args) => {
     return 'Split Code to Install into a Database'
    }
   },
   
   addPet:{
    type: typeAnimal,
    args:{
      animal_name:{type:new GraphQLNonNull(GraphQLString)},
      number_available:{type: new GraphQLNonNull(GraphQLInt)},
      price:{type:new GraphQLNonNull(GraphQLString)},
      description:{type:new GraphQLNonNull(GraphQLString)},
    },
    resolve:(source, args) => {
     console.log(args)
    }
   },
   
   addFashion:{
    type: typeFashion,
    args:{
      item_name:{type:new GraphQLNonNull(GraphQLString)},
      item_price:{type:new GraphQLNonNull(GraphQLString)},
      number_in_stock: {type:new GraphQLNonNull(GraphQLInt)},
      available_colors:{type: new GraphQLNonNull(GraphQLString)},
      gender_target:{type:new GraphQLNonNull(GraphQLString)},
      size_range:{type:new GraphQLNonNull(GraphQLString)},
      item_category:{type:new GraphQLNonNull(GraphQLString)},
      description:{type:new GraphQLNonNull(GraphQLString)},
      item_tag:{type:new GraphQLNonNull(GraphQLString)},
    },
    resolve:(source, args)  => {
      console.log(args)
    }
   },
   addProperty:{
    type: typeProperty,
    args:{
      property_type:{type:new GraphQLNonNull(GraphQLString)},
      property_name:{type:new GraphQLNonNull(GraphQLString)},
      property_location:{type:new GraphQLNonNull(GraphQLString)},
      property_price:{type:new GraphQLNonNull(GraphQLString)},
      property_registered:{type:new GraphQLNonNull(GraphQLBoolean)},
      property_description:{type:new GraphQLNonNull(GraphQLString)},
    },
    resolve:(source, args) => {
     console.log(args)
    }
   }
   
   
  }
  
  
 })
 
const schema = new GraphQLSchema({query:typeQuery, mutation: typeMutation})
 
 module.exports = schema