import Container from "./Container";
import Content from "./Content";
import Header from "./Header";
import Context from "./Context";
import Action from "./Action";
import Actions from "./Actions";

type IExportModal = {
    Container: typeof Container;
    Content: typeof Content;
    Header: typeof Header
    Context: typeof Context;
    Actions: typeof Actions;
    Action: typeof Action;
}

const components: IExportModal = {
    Container,
    Content,
    Header,
    Context,
    Actions,
    Action,
}

export default components