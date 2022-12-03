import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

    // auth omitted...
//    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
//    const sheets = google.sheets({ version: 'v4', auth });

    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
        const jwt = new google.auth.JWT(
          process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          null,
          (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
          target
        );
    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const { id } = query;
    console.log("Hello world ici " + process.env.SHEET_ID)
    const range = `Inventaire!A${id}:C${id}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    const [title, contentDeMoi] = response.data.values[0];
    console.log(title, contentDeMoi)

    return {
        props: {
            title,
            contentDeMoi
        }
    }
}

export default function AfficheLigne({ title, contentDeMoi }) {
    return <article>
        <h1>{title}</h1>
        <div>{contentDeMoi}</div>
    </article>
}