// ** Types Import
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Settings } from "@/@core/context/settingsContext";
import {
  NavLink,
  NavSectionTitle,
  VerticalNavItemsType,
} from "@/@core/layouts/types";

// ** Custom Menu Components
import VerticalNavLink, { CollapsibleSubMenu } from "./VerticalNavLink";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";
import classNames from "classnames";
import {
  faBug,
  faCalculator,
  faChartPie,
  faChevronUp,
  faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionContext,
  Badge,
  Button,
  Nav,
  useAccordionButton,
} from "react-bootstrap";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { ListItem } from "@mui/material";

interface Props {
  settings: Settings;
  navVisible?: boolean;
  groupActive: string[];
  currentActiveGroup: string[];
  verticalNavItems?: VerticalNavItemsType;
  saveSettings: (values: Settings) => void;
  setGroupActive: (value: string[]) => void;
  setCurrentActiveGroup: (item: string[]) => void;
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle;

  return VerticalNavLink;
};

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren;

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const { icon, children, href } = props;

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? (
            <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
          ) : (
            <span className="nav-icon ms-n3" />
          )}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

type SidebarNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren;

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext);
  const { eventKey, icon, children, setIsShow } = props;

  const decoratedOnClick = useAccordionButton(eventKey);

  const isCurrentEventKey = activeEventKey === eventKey;

  useEffect(() => {
    setIsShow(activeEventKey === eventKey);
  }, [activeEventKey, eventKey, setIsShow]);

  return (
    <Button
      variant="link"
      type="button"
      className={classNames(
        "rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none",
        {
          collapsed: !isCurrentEventKey,
        },
      )}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon me-3" icon={icon} />
      {children}
      <div className="nav-chevron ms-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  );
};

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
} & PropsWithChildren;

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
  const { toggleIcon, toggleText, children } = props;

  const [isShow, setIsShow] = useState(false);

  return (
    <Accordion
      as="li"
      bsPrefix="nav-group"
      className={classNames({ show: isShow })}
    >
      <SidebarNavGroupToggle
        icon={toggleIcon}
        eventKey="0"
        setIsShow={setIsShow}
      >
        {toggleText}
      </SidebarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">{children}</ul>
      </Accordion.Collapse>
    </Accordion>
  );
};

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props;

  const RenderMenuItems = verticalNavItems?.map(
    (item: NavLink | NavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return <TagName {...props} key={index} item={item} />;
    },
  );

  const menuData = [
    { title: "Item 1", subItems: ["Subitem 1.1", "Subitem 1.2"] },
    { title: "Item 2", subItems: ["Subitem 2.1", "Subitem 2.2"] },
  ];

  return (
    <>
      {RenderMenuItems}
      <ul className="list-unstyled px-2">
        <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Base">
          <SidebarNavItem href="#">Accordion</SidebarNavItem>
          <SidebarNavItem href="#">Breadcrumb</SidebarNavItem>
          <SidebarNavItem href="#">Cards</SidebarNavItem>
          <SidebarNavItem href="#">Carousel</SidebarNavItem>
          <SidebarNavItem href="#">Collapse</SidebarNavItem>
          <SidebarNavItem href="#">List group</SidebarNavItem>
          <SidebarNavItem href="#">Navs</SidebarNavItem>
          <SidebarNavItem href="#">Pagination</SidebarNavItem>
          <SidebarNavItem href="#">Popovers</SidebarNavItem>
          <SidebarNavItem href="#">Progress</SidebarNavItem>
          <SidebarNavItem href="#">Scrollspy</SidebarNavItem>
          <SidebarNavItem href="#">Spinners</SidebarNavItem>
          <SidebarNavItem href="#">Tables</SidebarNavItem>
          <SidebarNavItem href="#">Tabs</SidebarNavItem>
          <SidebarNavItem href="#">Tooltips</SidebarNavItem>
        </SidebarNavGroup>
      </ul>

      <div className="">
        {menuData.map((menuItem, index) => (
          <CollapsibleSubMenu
            key={index}
            title={menuItem.title}
            subItems={menuItem.subItems}
          />
        ))}
      </div>
    </>
  );
};

export default VerticalNavItems;
