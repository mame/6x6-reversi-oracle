use std::fmt;
use std::ops::{Add, Div, Mul, Neg, Sub};

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct Value(i32);

impl Value {
    pub const INF: Value = Value(0xffff);
    pub const ONE: Value = Value(1);
    pub const ZERO: Value = Value(0);

    pub fn new(v: i32) -> Value {
        Value(v)
    }
    pub fn as_i32(&self) -> i32 {
        self.0
    }
}

impl fmt::Display for Value {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:+3}", self.0)
    }
}

impl Neg for Value {
    type Output = Self;

    fn neg(self) -> Self::Output {
        Self::new(-self.0)
    }
}

impl Add for Value {
    type Output = Self;

    fn add(self, other: Self) -> Self::Output {
        Self::new(self.0 + other.0)
    }
}

impl Sub for Value {
    type Output = Self;

    fn sub(self, other: Self) -> Self::Output {
        Self::new(self.0 - other.0)
    }
}

impl Mul<i32> for Value {
    type Output = Self;

    fn mul(self, other: i32) -> Self::Output {
        Self::new(self.0 * other)
    }
}

impl Div<i32> for Value {
    type Output = Self;

    fn div(self, other: i32) -> Self::Output {
        Self::new(self.0 / other)
    }
}
