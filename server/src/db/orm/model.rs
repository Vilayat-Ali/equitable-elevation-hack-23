use super::schema;

use async_trait::async_trait;
use mongodb::error::Result;
use serde::Serialize;

#[async_trait]
pub trait SchemaModel<T, P>
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

pub struct Model<T> {
    pub def: schema::Schema<T>,
    pub collection_name: String,
}

impl<T> Model<T> {
    pub fn new(collection_name: String, schema_def: schema::Schema<T>) -> Self {
        Self {
            def: schema_def,
            collection_name,
        }
    }
}

impl<T, P> SchemaModel<T, P> for Model<T>
where
    T: Serialize,
    P: Serialize,
{
    #[must_use]
    #[allow(clippy::type_complexity, clippy::type_repetition_in_bounds)]
    fn init<'async_trait>(
        schema: schema::Schema<T>,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    > {
        todo!()
    }

    #[must_use]
    #[allow(clippy::type_complexity, clippy::type_repetition_in_bounds)]
    fn create<'life0, 'async_trait>(
        &'life0 self,
        schema_instance: T,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        todo!()
    }

    #[must_use]
    #[allow(clippy::type_complexity, clippy::type_repetition_in_bounds)]
    fn read<'life0, 'async_trait>(
        &'life0 self,
        search_def: T,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        todo!()
    }

    #[must_use]
    #[allow(clippy::type_complexity, clippy::type_repetition_in_bounds)]
    fn update<'life0, 'async_trait>(
        &'life0 self,
        search_def: T,
        update_def: P,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        todo!()
    }

    #[must_use]
    #[allow(clippy::type_complexity, clippy::type_repetition_in_bounds)]
    fn delete<'life0, 'async_trait>(
        &'life0 self,
        search_def: T,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        todo!()
    }
}
