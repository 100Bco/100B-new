cormorant-vn-marks.woff2 / cormorant-vn-marks-italic.woff2

Six glyphs from Cormorant Garamond with one change: â ê ô ậ ệ ộ.

Cormorant draws two different circumflexes. The one used under a tone mark
(ấ, ế, ố) is flat and sits just above the x-height, topping out at 581 units.
The one used when the circumflex stands alone reaches 730, well past the 625
cap height, so on these six letters the mark reads as detached from the
letter under it. Uppercase does not have the problem: Â and Ấ already share
one mark.

These files carry the six letters with the flat circumflex copied onto them,
each kept on its own horizontal centre. Letter shapes, widths and font
metrics are untouched, so they drop in beside the upstream font without
moving anything.

They are loaded ahead of Cormorant Garamond in app/globals.css, restricted by
unicode-range to exactly these six codepoints. Every other character still
comes from Google's copy of the font through next/font.

Built from google/fonts ofl/cormorantgaramond, variable weight 300-700,
upright and italic. Licence in cormorant-vn-marks-OFL.txt. Renamed internally
to "Cormorant Garamond VN" so it is not mistaken for the upstream font.
