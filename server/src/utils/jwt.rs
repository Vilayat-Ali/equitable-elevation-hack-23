use crate::provide_env;

use jsonwebtoken;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct JWTUserPayload {
    avatar: String,
    name: String,
    email: String,
}

pub fn generate_token(
    name: impl Into<String>,
    email: impl Into<String>,
) -> jsonwebtoken::errors::Result<String> {
    let token: String = jsonwebtoken::encode(
        &jsonwebtoken::Header::default(),
        &JWTUserPayload {
            avatar: String::new(),
            name: name.into(),
            email: email.into(),
        },
        &jsonwebtoken::EncodingKey::from_secret(provide_env().access_secret.as_ref()),
    )?;
    Ok(token)
}

pub fn verify_token(token: &str) -> jsonwebtoken::errors::Result<JWTUserPayload> {
    let decoded_data: jsonwebtoken::TokenData<JWTUserPayload> =
        jsonwebtoken::decode::<JWTUserPayload>(
            token,
            &jsonwebtoken::DecodingKey::from_secret(provide_env().access_secret.as_ref()),
            &jsonwebtoken::Validation::default(),
        )?;
    Ok(decoded_data.claims)
}
