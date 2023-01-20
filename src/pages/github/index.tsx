const Github = () => {
  return (
    <>
      <div>
        <h2>github pages</h2>
        
      </div>
    </>
  );
};

Github.authGuard = false;
Github.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Github;