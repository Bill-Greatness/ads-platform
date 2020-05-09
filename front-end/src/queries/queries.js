import {gql} from 'apollo-boost'


/******************************** Mutation Queries ***************************************/
const addNewUser = gql`
  mutation addNewClient($firstname:String!, $surname:String!, $date_of_birth:String!, $gender:String!, $id_type:String!, $id_number:String!, $password:String!, $phone:String!, $email:String!, $digital_addr:String!, $region:String!) {
    addUser(firstname:$firstname, surname:$surname, date_of_birth:$date_of_birth, gender:$gender, id_type:$id_type,id_number:$id_number, password:$password,phone:$phone, email:$email, digital_addr:$digital_addr, region:$region){
    firstname,
    surname
  }
  
}`

const addNewBook = gql`
  mutation addNewBook($book_title:String!, $book_genre:String!, $name_of_author:String!, $book_price:String!,$number_available:Int!, $book_description:String!, $date_published:String!){
      addBook(book_title:$book_title, book_genre:$book_genre, name_of_author:$name_of_author,book_price:$book_price, number_available:$number_available, book_description:$book_description, date_published:$date_published){
        name_of_author,
        book_title
      }
  }
`

const addNewDevice = gql`
  mutation addNewDevice($device_name:String!, $device_type:String!, $price:String!, $and_or_ios_version:String!, $description:String!, $ram_size:String!, $memory_size:String!, $device_color:String!){
    addDevice(device_name:$device_name,device_type:$device_type, price:$price, and_or_ios_version:$and_or_ios_version, description:$description, ram_size:$ram_size, memory_size:$memory_size, device_color:$device_color){
      device_name,
      device_color
    }
  }
`

const addNewFashion = gql`
  mutation addNewFashion($item_name:String!, $item_price:String!, $number_in_stock:Int!,$gender_target:String!, $size_range:String!, $available_colors:String!, $item_category:String!, $description:String!, $item_tag:String!){
      addFashion(item_name:$item_name,item_category:$item_category item_price:$item_price,number_in_stock:$number_in_stock, gender_target:$gender_target, size_range:$size_range, available_colors:$available_colors,description:$description, item_tag:$item_tag){
        item_name,
        number_in_stock
      }
  }
`

const addNewPet = gql`
  mutation addNewPet($animal_name:String!, $price:String!, $description:String!, $number_available:Int!){
    addPet(animal_name:$animal_name, price:$price, description:$description,number_available:$number_available){
      animal_name, 
      number_available
    }
  }
`

const addNewProperty = gql`
  mutation addNewProperty($property_type:String!, $property_name:String!, $property_location:String!, $property_price:String!, $property_registered:Boolean!, $property_description:String!){
    addProperty(property_type:$property_type, property_name:$property_name, property_price:$property_price, property_location:$property_location, property_registered:$property_registered,property_description:$property_description){
      property_name, 
      property_price
    }
  }
`


 
const addNewService = gql`
  mutation addNewService($service_name:String!,$service_tag:String!, $service_duration:String!,$service_location:String!, $service_description:String!, $service_price:String! ){
    addService(service_name:$service_name, service_tag:$service_tag, service_duration:$service_duration, service_price:$service_price, service_location:$service_location, service_description:$service_description){
      service_name,
      service_price
    }
  }
`


const addNewVacancy = gql`
  mutation addNewVacancy($vacn_title:String!, $vacn_tag:String!, $vacn_duration:String!,$vacn_description:String!, $vacn_price:String!, $vacn_duration:String!){
    addVacancy(vacn_title:$vacn_title, vacn_description:$vacn_description,vacn_tag:$vacn_tag, vacn_price:$vacn_price, vacn_duration:$vacn_duration){
      vacn_title,
      vacn_duration
    }
  }
`

/*************************   Read Queries      ************************/

const getAllPhones = gql`
{
  get_phones{
    device_name,
    price,
    ram_size,
    memory_size,
    device_color,
    image,
    description,
    posted_by{
      firstname, 
      surname
    }
  }
}
`

export {addNewUser, addNewBook, addNewDevice,
   addNewFashion, addNewPet, addNewProperty,
    addNewService,addNewVacancy, getAllPhones}