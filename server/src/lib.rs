pub mod db;
pub mod routes;
pub mod utils;

use envy;
use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct ENV {
    pub address: String,
    pub port: u16,
    pub access_secret: String,
    pub mongo_uri: String,
}

pub fn provide_env() -> ENV {
    match envy::from_env::<ENV>() {
        Ok(env) => env,
        Err(error) => panic!("{:#?}", error),
    }
}
