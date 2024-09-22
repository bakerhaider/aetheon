import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
  email: String,
  message: String,
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;
