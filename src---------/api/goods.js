import http from '@utils/http';
export const week_choice = (city_id,page)=>http.get("/hub/home/v1/web/week_choice.json",{
    city_id:city_id,
    page:page
})
