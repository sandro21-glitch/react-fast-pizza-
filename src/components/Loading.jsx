const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center backdrop-blur-lg">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
