interface Props {
  icon: string;
  [key: string]: any;
}

const Icon = ({ icon, ...rest }: Props) => {
  return (
    <i
      style={{ fontFamily: "FontAwesome" }}
      className={`fa fa-${icon}`}
      {...rest}
    />
  );
};

export default Icon;
