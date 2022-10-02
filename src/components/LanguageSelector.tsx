import { Button, FormControl, InputLabel, ListItemIcon, ListItemText, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const LanguageSelector: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const { language, languages, changeLanguage } = useI18next();

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelection = (language: string) => {
    changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleIconClick} sx={{ minWidth: 0, paddingRight: 0, paddingLeft: 0 }}>
        <LanguageIcon fontSize="large" />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {languages.map((lang: string) => (
          <MenuItem key={lang} selected={lang === language} onClick={() => handleSelection(lang)}>
            {t(lang)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
