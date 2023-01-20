const DataFlowDiagram = () => {
  return (
    <>
      <div>
        <h2>DFD page</h2>
        
      </div>
    </>
  );
};

DataFlowDiagram.authGuard = false;
DataFlowDiagram.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default DataFlowDiagram;