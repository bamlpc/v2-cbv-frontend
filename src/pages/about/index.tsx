const About = () => {
  return (
    <>
      <div>
        <h2>About page</h2>
        
      </div>
    </>
  );
};

About.authGuard = false;
About.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default About;