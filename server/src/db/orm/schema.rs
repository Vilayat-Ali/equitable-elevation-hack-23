use serde::Serialize;

pub enum SchemaDataType {
    String,
    ObjectId,
    Number,
    Boolean,
    Array,
}

#[derive(Serialize)]
pub struct Schema<T>(T);

impl<T> Schema<T>
where
    T: Serialize,
{
    pub fn new(schema_def: T) -> Self {
        Self(schema_def)
    }
}
