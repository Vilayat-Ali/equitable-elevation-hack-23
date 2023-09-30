use actix_web::middleware::Logger;
use actix_web::{App, HttpServer};
use dotenv;
use server::{db::MongoDB, provide_env};

// routes
use server::routes::auth::{handle_login, handle_register};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();
    let env = provide_env();

    let mongo_conn = MongoDB::connect().await;

    match mongo_conn {
        Ok(_conn) => {
            println!("DB Log: DB connection established");
            HttpServer::new(|| {
                App::new()
                    .wrap(Logger::default())
                    .service(handle_register)
                    .service(handle_login)
            })
            .bind((env.address, env.port))?
            .run()
            .await
        }
        Err(_) => panic!("DB Error: Cannot connect to DB"),
    }
}
