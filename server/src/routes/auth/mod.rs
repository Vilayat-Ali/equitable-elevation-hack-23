use actix_web::{post, HttpResponse, Responder};

#[post("/register")]
async fn handle_register() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/login")]
async fn handle_login() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}
