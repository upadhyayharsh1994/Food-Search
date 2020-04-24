import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 07WNBMIzfWJ0PD8Bnsh3hq2kb1DYJz0GCjF_-G6OILyW738V1JfYq0e-4O6mJ3VFhq7Uyf11XzTQJAD_q6SPmJxn6lV7Dc7TJ6JDO0mDOhI0uxjUMftf22HSPb2HXnYx'
    }
});
