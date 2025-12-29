import * as React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", contact: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container maxWidth="" data-aos="zoom-in"
    data-aos-duration="1000">
      <Box
        sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          "Explore our website for curated content and expert insights. Start
          your journey to knowledge and discovery today!"
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} >
            <img
              src="skill4.png"
              alt="Contact Us"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact"
                type="tel"
                variant="outlined"
                margin="normal"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}