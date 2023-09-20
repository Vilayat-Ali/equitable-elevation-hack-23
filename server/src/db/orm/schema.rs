use async_trait::async_trait;
use serde::Serialize;

#[async_trait]
pub trait ModelSchema<T>
where
    T: Serialize,
{
    async fn define(&self, model_schema: Schema<T>) -> Result<(), ()>;
}

pub struct Schema<T>(T);

impl<T> Schema<T>
where
    T: Serialize,
{
    pub fn new(schema_def: T) -> Self {
        Self(schema_def)
    }
}
