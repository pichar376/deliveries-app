import Button from "../Button/Button";

const ButtonSecondary = ({ Icon, children, ...rest }) => {
  return (
    <Button
      endIcon={<Icon style={{ color: "#00000075", fontSize: "16px" }} />}
      sx={{
        color: "#000",
        fontWeight: "500",
        fontSize: 16,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
