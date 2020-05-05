const graphql = require('graphql')
const {GraphQLObjectType,GraphQLBoolean,GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema} = graphql


 const typeUser = new GraphQLObjectType({
  name:'Users',
  fields:{
        user_id: {type:GraphQLID},
        firstname: {type: GraphQLString},
        surname:{type:GraphQLString},
        date_of_birth:{type:GraphQLString},
        id_type:{type:GraphQLString},
        id_number:{type:GraphQLString},
        gender:{type:GraphQLString},
        location:{type:GraphQLString},
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
        date_publish:{type:GraphQLString},
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
        serive_location:{type:GraphQLString},
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
    devices:{
      type:GraphQLList(typeDevice),
      resolve:() => {
       return 'A List Of Devices Here'
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
         state:{type: GraphQLObjectType}
        },
        resolve: (source, args) => {
        return "Split Code to Install in DataBase."
       }
   },
   addDevice:{
    type: typeDevice,
    args:{
     state: {type: GraphQLObjectType}
    },
    resolve:(source, args) => {
     return 'Code to Install in DataBase'
    }
   },
   
   addService:{
    type: typeService,
    args:{
     state:{type: GraphQLObjectType}
    },
    resolve:(source, args) => {
     return 'Split Code to Install into Database'
    }
   },
   
   addBook:{
    type: typeBook,
    args:{
     state:{type: GraphQLObjectType}
    },
    resolve:(source, args) => {
     return 'Split Code to install into Database'
    }
   },
   
   addVacancy:{
    type: typeVacancy,
    args:{
     state:{type:GraphQLObjectType}
    },
    resolve:(source, args) => {
     return 'Split Code to Install into a Database'
    }
   },
   
   addPet:{
    type: typePet,
    args:{
     state:{type:GraphQLObjectType}
    },
    resolve:(source, args) => {
     return 'Split code to install into a database!'
    }
   },
   
   addFashion:{
    type: typeFashion,
    args:{
     state:{type: GraphQLObjectType}
    },
    resolve:(source, args)  => {
     return 'Split Code to install into database'
    }
   },
   addProperty:{
    type: typeProperty,
    args:{
     state:{type:GraphQLObjectType}
    },
    resolve:(source, args){
     return 'Split Code to install into a database'
    }
   }
   
   
  }
  
  
 })
 
const schema = new GraphQLSchema({query:typeQuery, mutation: typeMutation})
 
 module.exports = schema