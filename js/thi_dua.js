const page = [
    `
        <link rel="stylesheet" href="css/thi_dua/body1.css">
        <div id="bc7__center__header1">
            <div id="bc7__center__h1__time">
                <p id="bc7__center__h1__time__year" class = "bc7__center__h1__time__element">Năm Học 2023-2024</p>
                <p id="bc7__center__h1__time__week" class = "bc7__center__h1__time__element">Tuần <span class="add__week-number"></span></p>
            </div>
            <button id="bc7__center__h1__updateBtn" onclick = "setState()" style = "border: 0; outline: 0; background-color: transparent">
                <p>CẬP NHẬT <i class="fa-solid fa-plus" style="margin-left: 2%"></i></p>
            </button>
        </div>
        <div id="bc7__center__body1">
            <div class="bc7__center__b1__element set-scrollbar--y">
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.1</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.2</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.3</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.4</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.5</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">10.6</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
            </div>
        
            <div class="bc7__center__b1__element set-scrollbar--y">
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.1</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.2</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.3</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.4</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.5</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">11.6</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
            </div>
        
            <div class="bc7__center__b1__element set-scrollbar--y">
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.1</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.2</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.3</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.4</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.5</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
                <div class="bc7__center__b1__element__element">
                    <p class = "bc7__cB1__2e__name">12.6</p>
                    <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                            <p>Cộng</p>
                            <p>Trừ</p>
                            <p>Tổng</p>
                        </div>
                        <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                            <p><span>+</span><span>Number</span></p>
                            <p><span>-</span><span>Number</span></p>
                            <p>Number</p>
                        </div>
                    </div>
                    <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                </div>
            </div>
        </div>
    `
    ,
    `
        <link rel="stylesheet" href="css/thi_dua/body2.css">
        <form id="content__header">
            <div id="inputFile" class = "inputBlock">
                <span>Nhập file điểm tại đây</span>
                <input type="file" name="inputLink" id="input_link" style="display: none">
                <label for="input_link" class = "btnIP" title = "Chọn file excel">NHẬP FILE EXCEL <i class="fa-solid fa-table"></i></label>
            </div>
            <div id="inputTime" class = "inputBlock">
                <span>Chọn mốc thời gian</span>
                <div>
                    <select name="inputYear" id="selectYear" class = "btnIP"></select>
                    <select name="inputWeek" id="selectWeek" class = "btnIP" style="margin-left: 2%;"></select>
                </div>
            </div>

            <button type = "submit" id = "submitButton">
                <span>Đọc dữ liệu</span>
            </button>
        </form>
        <button id="exitInput" onclick = "setState()">
            <span>ĐÓNG </span><i class="fa-solid fa-right-from-bracket" style="margin-left: 5%;"></i>
        </button>
        <div id="content__body">
            <div id="mainBoard">
                <div id="bc7__center__body1">
                    <div class="bc7__center__b1__element set-scrollbar--y">
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.1</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.2</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.3</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.4</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.5</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">10.6</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                    </div>

                    <div class="bc7__center__b1__element set-scrollbar--y">
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.1</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.2</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.3</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.4</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.5</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">11.6</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                    </div>

                    <div class="bc7__center__b1__element set-scrollbar--y">
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.1</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.2</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.3</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.4</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.5</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                        <div class="bc7__center__b1__element__element">
                            <p class = "bc7__cB1__2e__name">12.6</p>
                            <div class = "bc7__cB1__2e__table"> <!-- body center7 element__element table-->
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__head">
                                    <p>Cộng</p>
                                    <p>Trừ</p>
                                    <p>Tổng</p>
                                </div>
                                <div class="hc7__cB1__2e__table__element hc7__cB1__2e__table__body">
                                    <p><span>+</span><span>Number</span></p>
                                    <p><span>-</span><span>Number</span></p>
                                    <p>Number</p>
                                </div>
                            </div>
                            <p class = "bc7__cB1__2e__rank">HẠNG:<span style="margin-left: 1%;"><i style = "font-size: 0.5em">update later</i></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
]
const root = document.getElementById("bc7__center");
var state = 0

function set() {
    root.innerHTML = page[state];
    state == 1 ? setOption() : null;
}

function setState() {
    state = (state == 0) ? 1 : 0;

    return set(state);
}

const year = [2017, 2018, 2019, 2020, 2021, 2022];
const week = [...Array(6).keys()];
function setOption() {
    let test1 = document.getElementById("selectYear");
    let test2 = document.getElementById("selectWeek");

    test1.innerHTML = year.map(y => `<option value="${y}">${y}-${y + 1}</option>`).join("");
    test2.innerHTML = week.map(w => `<option value="${w + 1}">Tuần ${w + 1}</option>`).join("");
}

set()