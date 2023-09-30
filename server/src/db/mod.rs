use crate::provide_env;
use mongodb::{options::ClientOptions, Client, Database};

pub const DB_NAME: &'static str = "helping-hands";

pub struct MongoDB {
    pub db: Database,
}

impl MongoDB {
    pub async fn connect() -> mongodb::error::Result<MongoDB> {
        let client_options = ClientOptions::parse(provide_env().mongo_uri).await?;
        let client: Client = Client::with_options(client_options)?;
        Ok(MongoDB {
            db: client.database(DB_NAME),
        })
    }
}
