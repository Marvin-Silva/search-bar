import React from "react";



    export const Board = (txt:string) => {
            return <>
                   <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>The table header</th>
                            </tr>
                        </thead>
                    <tbody>
                            <tr>
                                <td>The table body</td>
                                <td>with two columns</td>
                            </tr>
                    </tbody>
                    </table>

                   </>
}