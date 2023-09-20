use super::schema;

use async_trait::async_trait;
use mongodb::error::Result;
use serde::Serialize;

#[async_trait]
pub trait Model<T, P>
where
    T: Serialize,
    P: Serialize,
{
    async fn init(schema: schema::Schema<T>) -> Result<()>;

    async fn create(&self, schema_instance: T) -> Result<()>;

    async fn read(&self, search_def: T) -> Result<()>;

    async fn update(&self, search_def: T, update_def: P) -> Result<()>;

    async fn delete(&self, search_def: T) -> Result<()>;
}


