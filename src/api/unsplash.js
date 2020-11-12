import axios from 'axios';


export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
    Authorization: 'Client-ID Z50XmLlFQSNZix5X5biODWZD276EHfzvMxldFdwYeVU'
}
});