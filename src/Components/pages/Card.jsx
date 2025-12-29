import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./Card.css"
export default function ActionAreaCard() {
  const cards = [
    {
      title: "Entrepreneurship",
      description:
        "Empowering aspiring entrepreneurs with the right guidance, skills, and resources to build successful businesses. From idea validation to business strategy, mentorship, and growth planning, we provide expert support at every stage of the journey. Turn your vision into reality with the right direction and entrepreneurial mindset!",
      image: "Entrepreneurship.jpg",
    },
    {
      title: "Career Guidance",
      description:
        "Choosing the right career path is crucial for long-term success. Our career guidance services help students, job seekers, and professionals identify their strengths, explore career options, and develop a roadmap for success. We assist with resume building, interview preparation, skill development, and job search strategies to enhance career growth and opportunities",
      image: "career-guidance1.png",
    },
    {
      title: "Business Consulting",
      description:
        "We provide strategic business consulting to help organizations improve efficiency, maximize profits, and achieve their goals. Our services include market research, digital transformation, and leadership development. Whether you're a startup or an established business, we work closely with you to create sustainable strategies for long-term success",
      image: "Business-Consultant.jpg",
    },
    {
      title: "NGO Solution",
      description:
        "Creating a positive impact in society requires the right approach and resources. We support NGOs and social enterprises in developing effective programs, fundraising strategies, community outreach initiatives, and impact measurement frameworks. Our goal is to help organizations drive meaningful change and build a better future for communities in needy.",
      image: "NGO.jpg",
    },
    {
      title: "Goverment Project Support",
      description:
        "We assist individuals, businesses, and NGOs in understanding, applying for, and managing government projects and schemes. From documentation and compliance to project execution and funding assistance. Our expert team helps navigate complex procedures, making government collaborations more accessible and effective",
      image: "https://channelx.world/wp-content/uploads/2022/11/Government-01-scaled-1.jpg",
    },
    {
      title: "Skill Development & Training",
      description:
        "We believe that the right skills open doors to endless opportunities. Our Skill Development Programs are designed to enhance professional and personal growth, helping individuals stay competitive in today’s fast-paced world. Whether you are a student, job seeker, or working professional, we provide hands-on training to boost your career prospects.",
      image: "skill6.png",
    },
  ];

  return (
    <div className="card">
                  <div className="heading">Services</div>
    <Container sx={{ padding: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid  item xs={12} sm={6} md={4} key={index} >
            <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3}  }
               
               data-aos="flip-left"
               data-aos-duration="1000">
              <CardActionArea >
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                  className="cardImg"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardContent>
                <Button variant="contained" color="primary" fullWidth>
                  Read More
                </Button>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}