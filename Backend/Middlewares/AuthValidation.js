import { z } from "zod";

const ValidationSchema = z.object({
  name: z.string().min(3).max(100).optional(),
  email: z.string().email(),
  password: z.string().min(4).max(100),
});

export const signupValidation = (req, res, next) => {
  const result = ValidationSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Bad request",
      errors: result.error.errors.map((err) => ({
        path: err.path.join('.'),
        message: err.message,
      })),
    });
  }

  next();
};


export const signinValidation = (req, res, next)=>
{
     const result = ValidationSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Bad request",
      errors: result.error.errors.map((err) => ({
        path: err.path.join('.'),
        message: err.message,
      })),
    });
  }

  next();
}