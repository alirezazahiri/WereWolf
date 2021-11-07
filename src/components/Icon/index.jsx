const Icon = ({ icon, ...rest }) => {
    return (
        <i
            style={{ fontFamily: "FontAwesome" }}
            className={`fa fa-${icon}`}
            {...rest}
        />
    );
};

export default Icon;
