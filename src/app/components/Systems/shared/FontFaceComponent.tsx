import { useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

/** 
  Web font service such as Google Fonts, Typekit, Fonts.com, and Webtype.

  Instead: of @font-face {} in CSS

  //in FOLDER /src/fonts/NAME

  Loader:
  var font = new FontFaceObserver('Segoe MDL2', {
    weight?: 300,
    style?: 'italic'
  }););

  font.load().then(function () {
    console.log('Output Sans has loaded.');
  });

  Componenet Usage: 
  <FontFaceComponent font={@param {string}} code={@param {string}} color={@param {string}} name={@param {string}}/>
*/

/**
 * @param {string} somebody Somebody's name.
 */

interface FontProps {
  font: string;
  code: string;
  color?: string;
  name?: string;
  size?: number | string;
  weight?: number;
  className?: string;
}

export const FontFaceComponent = ({ font, code, color, name, size, weight, className = "" }: FontProps) => {
  useEffect(() => {
    const fontFace = new FontFaceObserver(font, {
      weight: weight,
    });

    fontFace.load().then(() => {
      document.body.classList.add("fontLoaded");
    });
  }, [font, weight]);

  const convertToUnicode = (code: string) => {
    const iconCoverted = String.fromCodePoint(parseInt(code, 16));
    return iconCoverted;
  };

  return (
    <span className={`icon icon-segoe ${className}`} style={{ color: color || "#000", fontSize: size }} data-name={name} data-code={code}>
      {convertToUnicode(code)}
    </span>
  );
};
