'use strict';

let items = [
  {
    'id_category': 1,
    'id_hymn': 4
  },
  {
    'id_category': 1,
    'id_hymn': 5
  },
  {
    'id_category': 1,
    'id_hymn': 6
  },
  {
    'id_category': 1,
    'id_hymn': 22
  },
  {
    'id_category': 1,
    'id_hymn': 24
  },
  {
    'id_category': 1,
    'id_hymn': 25
  },
  {
    'id_category': 1,
    'id_hymn': 26
  },
  {
    'id_category': 1,
    'id_hymn': 31
  },
  {
    'id_category': 1,
    'id_hymn': 37
  },
  {
    'id_category': 1,
    'id_hymn': 39
  },
  {
    'id_category': 1,
    'id_hymn': 48
  },
  {
    'id_category': 1,
    'id_hymn': 54
  },
  {
    'id_category': 1,
    'id_hymn': 3
  },
  {
    'id_category': 1,
    'id_hymn': 55
  },
  {
    'id_category': 1,
    'id_hymn': 60
  },
  {
    'id_category': 1,
    'id_hymn': 61
  },
  {
    'id_category': 1,
    'id_hymn': 62
  },
  {
    'id_category': 1,
    'id_hymn': 63
  },
  {
    'id_category': 1,
    'id_hymn': 64
  },
  {
    'id_category': 1,
    'id_hymn': 65
  },
  {
    'id_category': 1,
    'id_hymn': 66
  },
  {
    'id_category': 1,
    'id_hymn': 67
  },
  {
    'id_category': 1,
    'id_hymn': 68
  },
  {
    'id_category': 1,
    'id_hymn': 93
  },
  {
    'id_category': 1,
    'id_hymn': 94
  },
  {
    'id_category': 1,
    'id_hymn': 96
  },
  {
    'id_category': 1,
    'id_hymn': 99
  },
  {
    'id_category': 1,
    'id_hymn': 100
  },
  {
    'id_category': 1,
    'id_hymn': 109
  },
  {
    'id_category': 1,
    'id_hymn': 115
  },
  {
    'id_category': 1,
    'id_hymn': 144
  },
  {
    'id_category': 1,
    'id_hymn': 145
  },
  {
    'id_category': 1,
    'id_hymn': 204
  },
  {
    'id_category': 1,
    'id_hymn': 205
  },
  {
    'id_category': 1,
    'id_hymn': 207
  },
  {
    'id_category': 1,
    'id_hymn': 208
  },
  {
    'id_category': 1,
    'id_hymn': 209
  },
  {
    'id_category': 1,
    'id_hymn': 210
  },
  {
    'id_category': 1,
    'id_hymn': 213
  },
  {
    'id_category': 1,
    'id_hymn': 214
  },
  {
    'id_category': 1,
    'id_hymn': 215
  },
  {
    'id_category': 1,
    'id_hymn': 226
  },
  {
    'id_category': 1,
    'id_hymn': 228
  },
  {
    'id_category': 1,
    'id_hymn': 248
  },
  {
    'id_category': 1,
    'id_hymn': 254
  },
  {
    'id_category': 1,
    'id_hymn': 255
  },
  {
    'id_category': 1,
    'id_hymn': 277
  },
  {
    'id_category': 1,
    'id_hymn': 292
  },
  {
    'id_category': 1,
    'id_hymn': 293
  },
  {
    'id_category': 1,
    'id_hymn': 294
  },
  {
    'id_category': 1,
    'id_hymn': 295
  },
  {
    'id_category': 1,
    'id_hymn': 296
  },
  {
    'id_category': 1,
    'id_hymn': 297
  },
  {
    'id_category': 1,
    'id_hymn': 298
  },
  {
    'id_category': 1,
    'id_hymn': 299
  },
  {
    'id_category': 1,
    'id_hymn': 300
  },
  {
    'id_category': 1,
    'id_hymn': 301
  },
  {
    'id_category': 1,
    'id_hymn': 302
  },
  {
    'id_category': 1,
    'id_hymn': 303
  },
  {
    'id_category': 1,
    'id_hymn': 304
  },
  {
    'id_category': 1,
    'id_hymn': 305
  },
  {
    'id_category': 1,
    'id_hymn': 306
  },
  {
    'id_category': 1,
    'id_hymn': 307
  },
  {
    'id_category': 1,
    'id_hymn': 308
  },
  {
    'id_category': 1,
    'id_hymn': 309
  },
  {
    'id_category': 1,
    'id_hymn': 310
  },
  {
    'id_category': 1,
    'id_hymn': 312
  },
  {
    'id_category': 1,
    'id_hymn': 313
  },
  {
    'id_category': 1,
    'id_hymn': 314
  },
  {
    'id_category': 1,
    'id_hymn': 315
  },
  {
    'id_category': 1,
    'id_hymn': 316
  },
  {
    'id_category': 1,
    'id_hymn': 319
  },
  {
    'id_category': 1,
    'id_hymn': 326
  },
  {
    'id_category': 1,
    'id_hymn': 410
  },
  {
    'id_category': 1,
    'id_hymn': 417
  },
  {
    'id_category': 1,
    'id_hymn': 428
  },
  {
    'id_category': 1,
    'id_hymn': 432
  },
  {
    'id_category': 1,
    'id_hymn': 464
  },
  {
    'id_category': 1,
    'id_hymn': 473
  },
  {
    'id_category': 1,
    'id_hymn': 533
  },
  {
    'id_category': 1,
    'id_hymn': 538
  },
  {
    'id_category': 1,
    'id_hymn': 591
  },
  {
    'id_category': 1,
    'id_hymn': 598
  },
  {
    'id_category': 1,
    'id_hymn': 611
  },
  {
    'id_category': 1,
    'id_hymn': 621
  },
  {
    'id_category': 1,
    'id_hymn': 624
  },
  {
    'id_category': 1,
    'id_hymn': 626
  },
  {
    'id_category': 1,
    'id_hymn': 650
  },
  {
    'id_category': 1,
    'id_hymn': 655
  },
  {
    'id_category': 1,
    'id_hymn': 660
  },
  {
    'id_category': 1,
    'id_hymn': 665
  },
  {
    'id_category': 1,
    'id_hymn': 675
  },
  {
    'id_category': 1,
    'id_hymn': 701
  },
  {
    'id_category': 1,
    'id_hymn': 718
  },
  {
    'id_category': 1,
    'id_hymn': 719
  },
  {
    'id_category': 1,
    'id_hymn': 720
  },
  {
    'id_category': 1,
    'id_hymn': 1
  },
  {
    'id_category': 2,
    'id_hymn': 87
  },
  {
    'id_category': 2,
    'id_hymn': 91
  },
  {
    'id_category': 2,
    'id_hymn': 92
  },
  {
    'id_category': 2,
    'id_hymn': 374
  },
  {
    'id_category': 2,
    'id_hymn': 378
  },
  {
    'id_category': 2,
    'id_hymn': 394
  },
  {
    'id_category': 2,
    'id_hymn': 403
  },
  {
    'id_category': 2,
    'id_hymn': 470
  },
  {
    'id_category': 2,
    'id_hymn': 727
  },
  {
    'id_category': 2,
    'id_hymn': 393
  },
  {
    'id_category': 2,
    'id_hymn': 682
  },
  {
    'id_category': 2,
    'id_hymn': 21
  },
  {
    'id_category': 2,
    'id_hymn': 680
  },
  {
    'id_category': 2,
    'id_hymn': 32
  },
  {
    'id_category': 2,
    'id_hymn': 323
  },
  {
    'id_category': 2,
    'id_hymn': 36
  },
  {
    'id_category': 2,
    'id_hymn': 401
  },
  {
    'id_category': 2,
    'id_hymn': 392
  },
  {
    'id_category': 2,
    'id_hymn': 396
  },
  {
    'id_category': 2,
    'id_hymn': 710
  },
  {
    'id_category': 2,
    'id_hymn': 399
  },
  {
    'id_category': 2,
    'id_hymn': 400
  },
  {
    'id_category': 2,
    'id_hymn': 402
  },
  {
    'id_category': 2,
    'id_hymn': 42
  },
  {
    'id_category': 2,
    'id_hymn': 447
  },
  {
    'id_category': 2,
    'id_hymn': 716
  },
  {
    'id_category': 2,
    'id_hymn': 416
  },
  {
    'id_category': 2,
    'id_hymn': 412
  },
  {
    'id_category': 2,
    'id_hymn': 715
  },
  {
    'id_category': 2,
    'id_hymn': 324
  },
  {
    'id_category': 2,
    'id_hymn': 89
  },
  {
    'id_category': 2,
    'id_hymn': 88
  },
  {
    'id_category': 2,
    'id_hymn': 398
  },
  {
    'id_category': 2,
    'id_hymn': 717
  },
  {
    'id_category': 2,
    'id_hymn': 395
  },
  {
    'id_category': 2,
    'id_hymn': 397
  },
  {
    'id_category': 2,
    'id_hymn': 230
  },
  {
    'id_category': 2,
    'id_hymn': 90
  },
  {
    'id_category': 3,
    'id_hymn': 679
  },
  {
    'id_category': 3,
    'id_hymn': 678
  },
  {
    'id_category': 3,
    'id_hymn': 680
  },
  {
    'id_category': 3,
    'id_hymn': 681
  },
  {
    'id_category': 4,
    'id_hymn': 694
  },
  {
    'id_category': 4,
    'id_hymn': 695
  },
  {
    'id_category': 4,
    'id_hymn': 696
  },
  {
    'id_category': 5,
    'id_hymn': 704
  },
  {
    'id_category': 5,
    'id_hymn': 708
  },
  {
    'id_category': 5,
    'id_hymn': 733
  },
  {
    'id_category': 5,
    'id_hymn': 709
  },
  {
    'id_category': 5,
    'id_hymn': 700
  },
  {
    'id_category': 5,
    'id_hymn': 702
  },
  {
    'id_category': 5,
    'id_hymn': 705
  },
  {
    'id_category': 5,
    'id_hymn': 2
  },
  {
    'id_category': 5,
    'id_hymn': 703
  },
  {
    'id_category': 5,
    'id_hymn': 706
  },
  {
    'id_category': 5,
    'id_hymn': 701
  },
  {
    'id_category': 5,
    'id_hymn': 707
  },
  {
    'id_category': 6,
    'id_hymn': 621
  },
  {
    'id_category': 6,
    'id_hymn': 149
  },
  {
    'id_category': 6,
    'id_hymn': 631
  },
  {
    'id_category': 6,
    'id_hymn': 499
  },
  {
    'id_category': 6,
    'id_hymn': 183
  },
  {
    'id_category': 6,
    'id_hymn': 373
  },
  {
    'id_category': 6,
    'id_hymn': 624
  },
  {
    'id_category': 6,
    'id_hymn': 124
  },
  {
    'id_category': 6,
    'id_hymn': 618
  },
  {
    'id_category': 6,
    'id_hymn': 619
  },
  {
    'id_category': 6,
    'id_hymn': 352
  },
  {
    'id_category': 6,
    'id_hymn': 186
  },
  {
    'id_category': 6,
    'id_hymn': 628
  },
  {
    'id_category': 6,
    'id_hymn': 630
  },
  {
    'id_category': 6,
    'id_hymn': 620
  },
  {
    'id_category': 6,
    'id_hymn': 629
  },
  {
    'id_category': 6,
    'id_hymn': 622
  },
  {
    'id_category': 6,
    'id_hymn': 617
  },
  {
    'id_category': 6,
    'id_hymn': 626
  },
  {
    'id_category': 6,
    'id_hymn': 464
  },
  {
    'id_category': 6,
    'id_hymn': 524
  },
  {
    'id_category': 6,
    'id_hymn': 627
  },
  {
    'id_category': 6,
    'id_hymn': 136
  },
  {
    'id_category': 6,
    'id_hymn': 545
  },
  {
    'id_category': 6,
    'id_hymn': 520
  },
  {
    'id_category': 6,
    'id_hymn': 623
  },
  {
    'id_category': 6,
    'id_hymn': 625
  },
  {
    'id_category': 7,
    'id_hymn': 610
  },
  {
    'id_category': 7,
    'id_hymn': 607
  },
  {
    'id_category': 7,
    'id_hymn': 611
  },
  {
    'id_category': 7,
    'id_hymn': 183
  },
  {
    'id_category': 7,
    'id_hymn': 616
  },
  {
    'id_category': 7,
    'id_hymn': 602
  },
  {
    'id_category': 7,
    'id_hymn': 612
  },
  {
    'id_category': 7,
    'id_hymn': 182
  },
  {
    'id_category': 7,
    'id_hymn': 181
  },
  {
    'id_category': 7,
    'id_hymn': 179
  },
  {
    'id_category': 7,
    'id_hymn': 609
  },
  {
    'id_category': 7,
    'id_hymn': 604
  },
  {
    'id_category': 7,
    'id_hymn': 598
  },
  {
    'id_category': 7,
    'id_hymn': 605
  },
  {
    'id_category': 7,
    'id_hymn': 184
  },
  {
    'id_category': 7,
    'id_hymn': 185
  },
  {
    'id_category': 7,
    'id_hymn': 599
  },
  {
    'id_category': 7,
    'id_hymn': 608
  },
  {
    'id_category': 7,
    'id_hymn': 606
  },
  {
    'id_category': 7,
    'id_hymn': 180
  },
  {
    'id_category': 7,
    'id_hymn': 613
  },
  {
    'id_category': 7,
    'id_hymn': 614
  },
  {
    'id_category': 7,
    'id_hymn': 603
  },
  {
    'id_category': 7,
    'id_hymn': 615
  },
  {
    'id_category': 8,
    'id_hymn': 684
  },
  {
    'id_category': 8,
    'id_hymn': 686
  },
  {
    'id_category': 8,
    'id_hymn': 682
  },
  {
    'id_category': 8,
    'id_hymn': 685
  },
  {
    'id_category': 8,
    'id_hymn': 683
  },
  {
    'id_category': 9,
    'id_hymn': 306
  },
  {
    'id_category': 9,
    'id_hymn': 704
  },
  {
    'id_category': 9,
    'id_hymn': 461
  },
  {
    'id_category': 9,
    'id_hymn': 134
  },
  {
    'id_category': 9,
    'id_hymn': 505
  },
  {
    'id_category': 9,
    'id_hymn': 512
  },
  {
    'id_category': 9,
    'id_hymn': 484
  },
  {
    'id_category': 9,
    'id_hymn': 171
  },
  {
    'id_category': 9,
    'id_hymn': 168
  },
  {
    'id_category': 9,
    'id_hymn': 456
  },
  {
    'id_category': 9,
    'id_hymn': 506
  },
  {
    'id_category': 9,
    'id_hymn': 531
  },
  {
    'id_category': 9,
    'id_hymn': 544
  },
  {
    'id_category': 9,
    'id_hymn': 526
  },
  {
    'id_category': 9,
    'id_hymn': 504
  },
  {
    'id_category': 9,
    'id_hymn': 208
  },
  {
    'id_category': 9,
    'id_hymn': 157
  },
  {
    'id_category': 9,
    'id_hymn': 318
  },
  {
    'id_category': 9,
    'id_hymn': 173
  },
  {
    'id_category': 9,
    'id_hymn': 478
  },
  {
    'id_category': 9,
    'id_hymn': 508
  },
  {
    'id_category': 9,
    'id_hymn': 700
  },
  {
    'id_category': 9,
    'id_hymn': 435
  },
  {
    'id_category': 9,
    'id_hymn': 509
  },
  {
    'id_category': 9,
    'id_hymn': 507
  },
  {
    'id_category': 9,
    'id_hymn': 517
  },
  {
    'id_category': 9,
    'id_hymn': 533
  },
  {
    'id_category': 9,
    'id_hymn': 167
  },
  {
    'id_category': 9,
    'id_hymn': 528
  },
  {
    'id_category': 9,
    'id_hymn': 253
  },
  {
    'id_category': 9,
    'id_hymn': 515
  },
  {
    'id_category': 9,
    'id_hymn': 525
  },
  {
    'id_category': 9,
    'id_hymn': 535
  },
  {
    'id_category': 9,
    'id_hymn': 702
  },
  {
    'id_category': 9,
    'id_hymn': 514
  },
  {
    'id_category': 9,
    'id_hymn': 166
  },
  {
    'id_category': 9,
    'id_hymn': 527
  },
  {
    'id_category': 9,
    'id_hymn': 165
  },
  {
    'id_category': 9,
    'id_hymn': 141
  },
  {
    'id_category': 9,
    'id_hymn': 523
  },
  {
    'id_category': 9,
    'id_hymn': 518
  },
  {
    'id_category': 9,
    'id_hymn': 418
  },
  {
    'id_category': 9,
    'id_hymn': 522
  },
  {
    'id_category': 9,
    'id_hymn': 172
  },
  {
    'id_category': 9,
    'id_hymn': 169
  },
  {
    'id_category': 9,
    'id_hymn': 455
  },
  {
    'id_category': 9,
    'id_hymn': 170
  },
  {
    'id_category': 9,
    'id_hymn': 399
  },
  {
    'id_category': 9,
    'id_hymn': 530
  },
  {
    'id_category': 9,
    'id_hymn': 275
  },
  {
    'id_category': 9,
    'id_hymn': 274
  },
  {
    'id_category': 9,
    'id_hymn': 534
  },
  {
    'id_category': 9,
    'id_hymn': 154
  },
  {
    'id_category': 9,
    'id_hymn': 516
  },
  {
    'id_category': 9,
    'id_hymn': 519
  },
  {
    'id_category': 9,
    'id_hymn': 471
  },
  {
    'id_category': 9,
    'id_hymn': 317
  },
  {
    'id_category': 9,
    'id_hymn': 146
  },
  {
    'id_category': 9,
    'id_hymn': 524
  },
  {
    'id_category': 9,
    'id_hymn': 443
  },
  {
    'id_category': 9,
    'id_hymn': 430
  },
  {
    'id_category': 9,
    'id_hymn': 448
  },
  {
    'id_category': 9,
    'id_hymn': 174
  },
  {
    'id_category': 9,
    'id_hymn': 513
  },
  {
    'id_category': 9,
    'id_hymn': 511
  },
  {
    'id_category': 9,
    'id_hymn': 431
  },
  {
    'id_category': 9,
    'id_hymn': 532
  },
  {
    'id_category': 9,
    'id_hymn': 381
  },
  {
    'id_category': 9,
    'id_hymn': 476
  },
  {
    'id_category': 9,
    'id_hymn': 485
  },
  {
    'id_category': 9,
    'id_hymn': 520
  },
  {
    'id_category': 9,
    'id_hymn': 529
  },
  {
    'id_category': 9,
    'id_hymn': 510
  },
  {
    'id_category': 9,
    'id_hymn': 250
  },
  {
    'id_category': 9,
    'id_hymn': 521
  },
  {
    'id_category': 10,
    'id_hymn': 439
  },
  {
    'id_category': 10,
    'id_hymn': 461
  },
  {
    'id_category': 10,
    'id_hymn': 438
  },
  {
    'id_category': 10,
    'id_hymn': 43
  },
  {
    'id_category': 10,
    'id_hymn': 456
  },
  {
    'id_category': 10,
    'id_hymn': 457
  },
  {
    'id_category': 10,
    'id_hymn': 126
  },
  {
    'id_category': 10,
    'id_hymn': 458
  },
  {
    'id_category': 10,
    'id_hymn': 127
  },
  {
    'id_category': 10,
    'id_hymn': 124
  },
  {
    'id_category': 10,
    'id_hymn': 468
  },
  {
    'id_category': 10,
    'id_hymn': 459
  },
  {
    'id_category': 10,
    'id_hymn': 449
  },
  {
    'id_category': 10,
    'id_hymn': 454
  },
  {
    'id_category': 10,
    'id_hymn': 441
  },
  {
    'id_category': 10,
    'id_hymn': 684
  },
  {
    'id_category': 10,
    'id_hymn': 84
  },
  {
    'id_category': 10,
    'id_hymn': 678
  },
  {
    'id_category': 10,
    'id_hymn': 539
  },
  {
    'id_category': 10,
    'id_hymn': 515
  },
  {
    'id_category': 10,
    'id_hymn': 123
  },
  {
    'id_category': 10,
    'id_hymn': 20
  },
  {
    'id_category': 10,
    'id_hymn': 98
  },
  {
    'id_category': 10,
    'id_hymn': 442
  },
  {
    'id_category': 10,
    'id_hymn': 143
  },
  {
    'id_category': 10,
    'id_hymn': 451
  },
  {
    'id_category': 10,
    'id_hymn': 437
  },
  {
    'id_category': 10,
    'id_hymn': 131
  },
  {
    'id_category': 10,
    'id_hymn': 460
  },
  {
    'id_category': 10,
    'id_hymn': 629
  },
  {
    'id_category': 10,
    'id_hymn': 132
  },
  {
    'id_category': 10,
    'id_hymn': 452
  },
  {
    'id_category': 10,
    'id_hymn': 455
  },
  {
    'id_category': 10,
    'id_hymn': 450
  },
  {
    'id_category': 10,
    'id_hymn': 128
  },
  {
    'id_category': 10,
    'id_hymn': 447
  },
  {
    'id_category': 10,
    'id_hymn': 600
  },
  {
    'id_category': 10,
    'id_hymn': 446
  },
  {
    'id_category': 10,
    'id_hymn': 443
  },
  {
    'id_category': 10,
    'id_hymn': 440
  },
  {
    'id_category': 10,
    'id_hymn': 125
  },
  {
    'id_category': 10,
    'id_hymn': 448
  },
  {
    'id_category': 10,
    'id_hymn': 174
  },
  {
    'id_category': 10,
    'id_hymn': 444
  },
  {
    'id_category': 10,
    'id_hymn': 130
  },
  {
    'id_category': 10,
    'id_hymn': 445
  },
  {
    'id_category': 10,
    'id_hymn': 453
  },
  {
    'id_category': 10,
    'id_hymn': 368
  },
  {
    'id_category': 10,
    'id_hymn': 263
  },
  {
    'id_category': 10,
    'id_hymn': 129
  },
  {
    'id_category': 11,
    'id_hymn': 631
  },
  {
    'id_category': 11,
    'id_hymn': 501
  },
  {
    'id_category': 11,
    'id_hymn': 647
  },
  {
    'id_category': 11,
    'id_hymn': 499
  },
  {
    'id_category': 11,
    'id_hymn': 474
  },
  {
    'id_category': 11,
    'id_hymn': 142
  },
  {
    'id_category': 11,
    'id_hymn': 126
  },
  {
    'id_category': 11,
    'id_hymn': 526
  },
  {
    'id_category': 11,
    'id_hymn': 488
  },
  {
    'id_category': 11,
    'id_hymn': 498
  },
  {
    'id_category': 11,
    'id_hymn': 34
  },
  {
    'id_category': 11,
    'id_hymn': 504
  },
  {
    'id_category': 11,
    'id_hymn': 150
  },
  {
    'id_category': 11,
    'id_hymn': 490
  },
  {
    'id_category': 11,
    'id_hymn': 64
  },
  {
    'id_category': 11,
    'id_hymn': 424
  },
  {
    'id_category': 11,
    'id_hymn': 100
  },
  {
    'id_category': 11,
    'id_hymn': 700
  },
  {
    'id_category': 11,
    'id_hymn': 27
  },
  {
    'id_category': 11,
    'id_hymn': 537
  },
  {
    'id_category': 11,
    'id_hymn': 500
  },
  {
    'id_category': 11,
    'id_hymn': 502
  },
  {
    'id_category': 11,
    'id_hymn': 514
  },
  {
    'id_category': 11,
    'id_hymn': 113
  },
  {
    'id_category': 11,
    'id_hymn': 489
  },
  {
    'id_category': 11,
    'id_hymn': 491
  },
  {
    'id_category': 11,
    'id_hymn': 487
  },
  {
    'id_category': 11,
    'id_hymn': 386
  },
  {
    'id_category': 11,
    'id_hymn': 486
  },
  {
    'id_category': 11,
    'id_hymn': 492
  },
  {
    'id_category': 11,
    'id_hymn': 518
  },
  {
    'id_category': 11,
    'id_hymn': 522
  },
  {
    'id_category': 11,
    'id_hymn': 148
  },
  {
    'id_category': 11,
    'id_hymn': 495
  },
  {
    'id_category': 11,
    'id_hymn': 496
  },
  {
    'id_category': 11,
    'id_hymn': 269
  },
  {
    'id_category': 11,
    'id_hymn': 646
  },
  {
    'id_category': 11,
    'id_hymn': 503
  },
  {
    'id_category': 11,
    'id_hymn': 497
  },
  {
    'id_category': 11,
    'id_hymn': 426
  },
  {
    'id_category': 11,
    'id_hymn': 37
  },
  {
    'id_category': 11,
    'id_hymn': 548
  },
  {
    'id_category': 11,
    'id_hymn': 227
  },
  {
    'id_category': 11,
    'id_hymn': 715
  },
  {
    'id_category': 11,
    'id_hymn': 493
  },
  {
    'id_category': 11,
    'id_hymn': 565
  },
  {
    'id_category': 11,
    'id_hymn': 511
  },
  {
    'id_category': 11,
    'id_hymn': 577
  },
  {
    'id_category': 11,
    'id_hymn': 372
  },
  {
    'id_category': 11,
    'id_hymn': 485
  },
  {
    'id_category': 11,
    'id_hymn': 35
  },
  {
    'id_category': 11,
    'id_hymn': 636
  },
  {
    'id_category': 11,
    'id_hymn': 388
  },
  {
    'id_category': 11,
    'id_hymn': 693
  },
  {
    'id_category': 11,
    'id_hymn': 494
  },
  {
    'id_category': 11,
    'id_hymn': 681
  },
  {
    'id_category': 12,
    'id_hymn': 216
  },
  {
    'id_category': 12,
    'id_hymn': 720
  },
  {
    'id_category': 12,
    'id_hymn': 711
  },
  {
    'id_category': 12,
    'id_hymn': 215
  },
  {
    'id_category': 12,
    'id_hymn': 594
  },
  {
    'id_category': 12,
    'id_hymn': 712
  },
  {
    'id_category': 12,
    'id_hymn': 5
  },
  {
    'id_category': 12,
    'id_hymn': 2
  },
  {
    'id_category': 12,
    'id_hymn': 603
  },
  {
    'id_category': 12,
    'id_hymn': 3
  },
  {
    'id_category': 12,
    'id_hymn': 312
  },
  {
    'id_category': 13,
    'id_hymn': 697
  },
  {
    'id_category': 13,
    'id_hymn': 51
  },
  {
    'id_category': 13,
    'id_hymn': 698
  },
  {
    'id_category': 13,
    'id_hymn': 52
  },
  {
    'id_category': 13,
    'id_hymn': 699
  },
  {
    'id_category': 13,
    'id_hymn': 70
  },
  {
    'id_category': 13,
    'id_hymn': 477
  },
  {
    'id_category': 14,
    'id_hymn': 704
  },
  {
    'id_category': 14,
    'id_hymn': 318
  },
  {
    'id_category': 14,
    'id_hymn': 535
  },
  {
    'id_category': 14,
    'id_hymn': 712
  },
  {
    'id_category': 14,
    'id_hymn': 319
  },
  {
    'id_category': 14,
    'id_hymn': 317
  },
  {
    'id_category': 14,
    'id_hymn': 713
  },
  {
    'id_category': 15,
    'id_hymn': 320
  },
  {
    'id_category': 15,
    'id_hymn': 321
  },
  {
    'id_category': 15,
    'id_hymn': 323
  },
  {
    'id_category': 15,
    'id_hymn': 178
  },
  {
    'id_category': 15,
    'id_hymn': 326
  },
  {
    'id_category': 15,
    'id_hymn': 322
  },
  {
    'id_category': 15,
    'id_hymn': 177
  },
  {
    'id_category': 15,
    'id_hymn': 324
  },
  {
    'id_category': 15,
    'id_hymn': 325
  },
  {
    'id_category': 16,
    'id_hymn': 286
  },
  {
    'id_category': 16,
    'id_hymn': 285
  },
  {
    'id_category': 17,
    'id_hymn': 54
  },
  {
    'id_category': 17,
    'id_hymn': 289
  },
  {
    'id_category': 17,
    'id_hymn': 67
  },
  {
    'id_category': 17,
    'id_hymn': 210
  },
  {
    'id_category': 17,
    'id_hymn': 212
  },
  {
    'id_category': 17,
    'id_hymn': 610
  },
  {
    'id_category': 17,
    'id_hymn': 216
  },
  {
    'id_category': 17,
    'id_hymn': 207
  },
  {
    'id_category': 17,
    'id_hymn': 50
  },
  {
    'id_category': 17,
    'id_hymn': 215
  },
  {
    'id_category': 17,
    'id_hymn': 206
  },
  {
    'id_category': 17,
    'id_hymn': 213
  },
  {
    'id_category': 17,
    'id_hymn': 303
  },
  {
    'id_category': 17,
    'id_hymn': 205
  },
  {
    'id_category': 17,
    'id_hymn': 5
  },
  {
    'id_category': 17,
    'id_hymn': 4
  },
  {
    'id_category': 17,
    'id_hymn': 2
  },
  {
    'id_category': 17,
    'id_hymn': 204
  },
  {
    'id_category': 17,
    'id_hymn': 209
  },
  {
    'id_category': 17,
    'id_hymn': 291
  },
  {
    'id_category': 17,
    'id_hymn': 128
  },
  {
    'id_category': 17,
    'id_hymn': 65
  },
  {
    'id_category': 17,
    'id_hymn': 1
  },
  {
    'id_category': 17,
    'id_hymn': 294
  },
  {
    'id_category': 17,
    'id_hymn': 217
  },
  {
    'id_category': 17,
    'id_hymn': 3
  },
  {
    'id_category': 17,
    'id_hymn': 211
  },
  {
    'id_category': 17,
    'id_hymn': 203
  },
  {
    'id_category': 17,
    'id_hymn': 208
  },
  {
    'id_category': 17,
    'id_hymn': 214
  },
  {
    'id_category': 18,
    'id_hymn': 556
  },
  {
    'id_category': 18,
    'id_hymn': 116
  },
  {
    'id_category': 18,
    'id_hymn': 413
  },
  {
    'id_category': 18,
    'id_hymn': 710
  },
  {
    'id_category': 18,
    'id_hymn': 117
  },
  {
    'id_category': 18,
    'id_hymn': 400
  },
  {
    'id_category': 18,
    'id_hymn': 521
  },
  {
    'id_category': 19,
    'id_hymn': 375
  },
  {
    'id_category': 19,
    'id_hymn': 133
  },
  {
    'id_category': 19,
    'id_hymn': 118
  },
  {
    'id_category': 19,
    'id_hymn': 467
  },
  {
    'id_category': 19,
    'id_hymn': 507
  },
  {
    'id_category': 19,
    'id_hymn': 167
  },
  {
    'id_category': 19,
    'id_hymn': 166
  },
  {
    'id_category': 19,
    'id_hymn': 322
  },
  {
    'id_category': 19,
    'id_hymn': 217
  },
  {
    'id_category': 19,
    'id_hymn': 110
  },
  {
    'id_category': 20,
    'id_hymn': 289
  },
  {
    'id_category': 20,
    'id_hymn': 216
  },
  {
    'id_category': 20,
    'id_hymn': 472
  },
  {
    'id_category': 20,
    'id_hymn': 602
  },
  {
    'id_category': 20,
    'id_hymn': 302
  },
  {
    'id_category': 20,
    'id_hymn': 51
  },
  {
    'id_category': 20,
    'id_hymn': 184
  },
  {
    'id_category': 20,
    'id_hymn': 292
  },
  {
    'id_category': 20,
    'id_hymn': 233
  },
  {
    'id_category': 20,
    'id_hymn': 204
  },
  {
    'id_category': 20,
    'id_hymn': 232
  },
  {
    'id_category': 20,
    'id_hymn': 208
  },
  {
    'id_category': 20,
    'id_hymn': 315
  },
  {
    'id_category': 21,
    'id_hymn': 631
  },
  {
    'id_category': 21,
    'id_hymn': 664
  },
  {
    'id_category': 21,
    'id_hymn': 320
  },
  {
    'id_category': 21,
    'id_hymn': 566
  },
  {
    'id_category': 21,
    'id_hymn': 544
  },
  {
    'id_category': 21,
    'id_hymn': 541
  },
  {
    'id_category': 21,
    'id_hymn': 618
  },
  {
    'id_category': 21,
    'id_hymn': 480
  },
  {
    'id_category': 21,
    'id_hymn': 539
  },
  {
    'id_category': 21,
    'id_hymn': 363
  },
  {
    'id_category': 21,
    'id_hymn': 728
  },
  {
    'id_category': 21,
    'id_hymn': 542
  },
  {
    'id_category': 21,
    'id_hymn': 540
  },
  {
    'id_category': 21,
    'id_hymn': 452
  },
  {
    'id_category': 21,
    'id_hymn': 546
  },
  {
    'id_category': 21,
    'id_hymn': 643
  },
  {
    'id_category': 21,
    'id_hymn': 317
  },
  {
    'id_category': 21,
    'id_hymn': 273
  },
  {
    'id_category': 21,
    'id_hymn': 325
  },
  {
    'id_category': 21,
    'id_hymn': 569
  },
  {
    'id_category': 21,
    'id_hymn': 331
  },
  {
    'id_category': 21,
    'id_hymn': 545
  },
  {
    'id_category': 21,
    'id_hymn': 543
  },
  {
    'id_category': 22,
    'id_hymn': 48
  },
  {
    'id_category': 22,
    'id_hymn': 277
  },
  {
    'id_category': 22,
    'id_hymn': 50
  },
  {
    'id_category': 22,
    'id_hymn': 274
  },
  {
    'id_category': 22,
    'id_hymn': 275
  },
  {
    'id_category': 22,
    'id_hymn': 56
  },
  {
    'id_category': 22,
    'id_hymn': 49
  },
  {
    'id_category': 22,
    'id_hymn': 276
  },
  {
    'id_category': 23,
    'id_hymn': 278
  },
  {
    'id_category': 23,
    'id_hymn': 53
  },
  {
    'id_category': 23,
    'id_hymn': 279
  },
  {
    'id_category': 23,
    'id_hymn': 280
  },
  {
    'id_category': 23,
    'id_hymn': 51
  },
  {
    'id_category': 23,
    'id_hymn': 709
  },
  {
    'id_category': 23,
    'id_hymn': 52
  },
  {
    'id_category': 24,
    'id_hymn': 598
  },
  {
    'id_category': 24,
    'id_hymn': 597
  },
  {
    'id_category': 24,
    'id_hymn': 599
  },
  {
    'id_category': 24,
    'id_hymn': 596
  },
  {
    'id_category': 24,
    'id_hymn': 601
  },
  {
    'id_category': 24,
    'id_hymn': 688
  },
  {
    'id_category': 24,
    'id_hymn': 600
  },
  {
    'id_category': 24,
    'id_hymn': 687
  },
  {
    'id_category': 25,
    'id_hymn': 264
  },
  {
    'id_category': 25,
    'id_hymn': 43
  },
  {
    'id_category': 25,
    'id_hymn': 91
  },
  {
    'id_category': 25,
    'id_hymn': 265
  },
  {
    'id_category': 25,
    'id_hymn': 45
  },
  {
    'id_category': 25,
    'id_hymn': 267
  },
  {
    'id_category': 25,
    'id_hymn': 266
  },
  {
    'id_category': 25,
    'id_hymn': 154
  },
  {
    'id_category': 25,
    'id_hymn': 262
  },
  {
    'id_category': 25,
    'id_hymn': 730
  },
  {
    'id_category': 25,
    'id_hymn': 268
  },
  {
    'id_category': 25,
    'id_hymn': 263
  },
  {
    'id_category': 25,
    'id_hymn': 44
  },
  {
    'id_category': 25,
    'id_hymn': 261
  },
  {
    'id_category': 26,
    'id_hymn': 191
  },
  {
    'id_category': 26,
    'id_hymn': 441
  },
  {
    'id_category': 26,
    'id_hymn': 440
  },
  {
    'id_category': 27,
    'id_hymn': 725
  },
  {
    'id_category': 27,
    'id_hymn': 580
  },
  {
    'id_category': 27,
    'id_hymn': 588
  },
  {
    'id_category': 27,
    'id_hymn': 592
  },
  {
    'id_category': 27,
    'id_hymn': 579
  },
  {
    'id_category': 27,
    'id_hymn': 584
  },
  {
    'id_category': 27,
    'id_hymn': 578
  },
  {
    'id_category': 27,
    'id_hymn': 585
  },
  {
    'id_category': 27,
    'id_hymn': 589
  },
  {
    'id_category': 27,
    'id_hymn': 594
  },
  {
    'id_category': 27,
    'id_hymn': 581
  },
  {
    'id_category': 27,
    'id_hymn': 178
  },
  {
    'id_category': 27,
    'id_hymn': 176
  },
  {
    'id_category': 27,
    'id_hymn': 175
  },
  {
    'id_category': 27,
    'id_hymn': 583
  },
  {
    'id_category': 27,
    'id_hymn': 582
  },
  {
    'id_category': 27,
    'id_hymn': 587
  },
  {
    'id_category': 27,
    'id_hymn': 590
  },
  {
    'id_category': 27,
    'id_hymn': 723
  },
  {
    'id_category': 27,
    'id_hymn': 177
  },
  {
    'id_category': 27,
    'id_hymn': 586
  },
  {
    'id_category': 27,
    'id_hymn': 591
  },
  {
    'id_category': 27,
    'id_hymn': 593
  },
  {
    'id_category': 27,
    'id_hymn': 595
  },
  {
    'id_category': 28,
    'id_hymn': 133
  },
  {
    'id_category': 28,
    'id_hymn': 439
  },
  {
    'id_category': 28,
    'id_hymn': 122
  },
  {
    'id_category': 28,
    'id_hymn': 556
  },
  {
    'id_category': 28,
    'id_hymn': 505
  },
  {
    'id_category': 28,
    'id_hymn': 108
  },
  {
    'id_category': 28,
    'id_hymn': 121
  },
  {
    'id_category': 28,
    'id_hymn': 115
  },
  {
    'id_category': 28,
    'id_hymn': 118
  },
  {
    'id_category': 28,
    'id_hymn': 164
  },
  {
    'id_category': 28,
    'id_hymn': 506
  },
  {
    'id_category': 28,
    'id_hymn': 59
  },
  {
    'id_category': 28,
    'id_hymn': 488
  },
  {
    'id_category': 28,
    'id_hymn': 504
  },
  {
    'id_category': 28,
    'id_hymn': 433
  },
  {
    'id_category': 28,
    'id_hymn': 265
  },
  {
    'id_category': 28,
    'id_hymn': 116
  },
  {
    'id_category': 28,
    'id_hymn': 454
  },
  {
    'id_category': 28,
    'id_hymn': 226
  },
  {
    'id_category': 28,
    'id_hymn': 490
  },
  {
    'id_category': 28,
    'id_hymn': 157
  },
  {
    'id_category': 28,
    'id_hymn': 163
  },
  {
    'id_category': 28,
    'id_hymn': 436
  },
  {
    'id_category': 28,
    'id_hymn': 424
  },
  {
    'id_category': 28,
    'id_hymn': 159
  },
  {
    'id_category': 28,
    'id_hymn': 27
  },
  {
    'id_category': 28,
    'id_hymn': 427
  },
  {
    'id_category': 28,
    'id_hymn': 435
  },
  {
    'id_category': 28,
    'id_hymn': 429
  },
  {
    'id_category': 28,
    'id_hymn': 422
  },
  {
    'id_category': 28,
    'id_hymn': 423
  },
  {
    'id_category': 28,
    'id_hymn': 111
  },
  {
    'id_category': 28,
    'id_hymn': 428
  },
  {
    'id_category': 28,
    'id_hymn': 113
  },
  {
    'id_category': 28,
    'id_hymn': 434
  },
  {
    'id_category': 28,
    'id_hymn': 425
  },
  {
    'id_category': 28,
    'id_hymn': 137
  },
  {
    'id_category': 28,
    'id_hymn': 451
  },
  {
    'id_category': 28,
    'id_hymn': 120
  },
  {
    'id_category': 28,
    'id_hymn': 104
  },
  {
    'id_category': 28,
    'id_hymn': 169
  },
  {
    'id_category': 28,
    'id_hymn': 496
  },
  {
    'id_category': 28,
    'id_hymn': 112
  },
  {
    'id_category': 28,
    'id_hymn': 117
  },
  {
    'id_category': 28,
    'id_hymn': 114
  },
  {
    'id_category': 28,
    'id_hymn': 109
  },
  {
    'id_category': 28,
    'id_hymn': 128
  },
  {
    'id_category': 28,
    'id_hymn': 426
  },
  {
    'id_category': 28,
    'id_hymn': 430
  },
  {
    'id_category': 28,
    'id_hymn': 161
  },
  {
    'id_category': 28,
    'id_hymn': 493
  },
  {
    'id_category': 28,
    'id_hymn': 177
  },
  {
    'id_category': 28,
    'id_hymn': 421
  },
  {
    'id_category': 28,
    'id_hymn': 110
  },
  {
    'id_category': 28,
    'id_hymn': 153
  },
  {
    'id_category': 28,
    'id_hymn': 431
  },
  {
    'id_category': 28,
    'id_hymn': 432
  },
  {
    'id_category': 28,
    'id_hymn': 555
  },
  {
    'id_category': 28,
    'id_hymn': 136
  },
  {
    'id_category': 28,
    'id_hymn': 119
  },
  {
    'id_category': 28,
    'id_hymn': 420
  },
  {
    'id_category': 28,
    'id_hymn': 261
  },
  {
    'id_category': 28,
    'id_hymn': 103
  },
  {
    'id_category': 29,
    'id_hymn': 692
  },
  {
    'id_category': 29,
    'id_hymn': 691
  },
  {
    'id_category': 29,
    'id_hymn': 690
  },
  {
    'id_category': 29,
    'id_hymn': 202
  },
  {
    'id_category': 29,
    'id_hymn': 693
  },
  {
    'id_category': 30,
    'id_hymn': 479
  },
  {
    'id_category': 30,
    'id_hymn': 122
  },
  {
    'id_category': 30,
    'id_hymn': 659
  },
  {
    'id_category': 30,
    'id_hymn': 660
  },
  {
    'id_category': 30,
    'id_hymn': 160
  },
  {
    'id_category': 30,
    'id_hymn': 484
  },
  {
    'id_category': 30,
    'id_hymn': 474
  },
  {
    'id_category': 30,
    'id_hymn': 663
  },
  {
    'id_category': 30,
    'id_hymn': 694
  },
  {
    'id_category': 30,
    'id_hymn': 162
  },
  {
    'id_category': 30,
    'id_hymn': 164
  },
  {
    'id_category': 30,
    'id_hymn': 183
  },
  {
    'id_category': 30,
    'id_hymn': 472
  },
  {
    'id_category': 30,
    'id_hymn': 494
  },
  {
    'id_category': 30,
    'id_hymn': 147
  },
  {
    'id_category': 30,
    'id_hymn': 695
  },
  {
    'id_category': 30,
    'id_hymn': 481
  },
  {
    'id_category': 30,
    'id_hymn': 469
  },
  {
    'id_category': 30,
    'id_hymn': 541
  },
  {
    'id_category': 30,
    'id_hymn': 158
  },
  {
    'id_category': 30,
    'id_hymn': 151
  },
  {
    'id_category': 30,
    'id_hymn': 156
  },
  {
    'id_category': 30,
    'id_hymn': 480
  },
  {
    'id_category': 30,
    'id_hymn': 152
  },
  {
    'id_category': 30,
    'id_hymn': 157
  },
  {
    'id_category': 30,
    'id_hymn': 478
  },
  {
    'id_category': 30,
    'id_hymn': 163
  },
  {
    'id_category': 30,
    'id_hymn': 159
  },
  {
    'id_category': 30,
    'id_hymn': 184
  },
  {
    'id_category': 30,
    'id_hymn': 597
  },
  {
    'id_category': 30,
    'id_hymn': 470
  },
  {
    'id_category': 30,
    'id_hymn': 483
  },
  {
    'id_category': 30,
    'id_hymn': 155
  },
  {
    'id_category': 30,
    'id_hymn': 535
  },
  {
    'id_category': 30,
    'id_hymn': 596
  },
  {
    'id_category': 30,
    'id_hymn': 696
  },
  {
    'id_category': 30,
    'id_hymn': 662
  },
  {
    'id_category': 30,
    'id_hymn': 401
  },
  {
    'id_category': 30,
    'id_hymn': 540
  },
  {
    'id_category': 30,
    'id_hymn': 601
  },
  {
    'id_category': 30,
    'id_hymn': 154
  },
  {
    'id_category': 30,
    'id_hymn': 503
  },
  {
    'id_category': 30,
    'id_hymn': 482
  },
  {
    'id_category': 30,
    'id_hymn': 475
  },
  {
    'id_category': 30,
    'id_hymn': 473
  },
  {
    'id_category': 30,
    'id_hymn': 471
  },
  {
    'id_category': 30,
    'id_hymn': 125
  },
  {
    'id_category': 30,
    'id_hymn': 161
  },
  {
    'id_category': 30,
    'id_hymn': 477
  },
  {
    'id_category': 30,
    'id_hymn': 153
  },
  {
    'id_category': 30,
    'id_hymn': 371
  },
  {
    'id_category': 30,
    'id_hymn': 627
  },
  {
    'id_category': 30,
    'id_hymn': 476
  },
  {
    'id_category': 30,
    'id_hymn': 444
  },
  {
    'id_category': 30,
    'id_hymn': 687
  },
  {
    'id_category': 30,
    'id_hymn': 60
  },
  {
    'id_category': 30,
    'id_hymn': 625
  },
  {
    'id_category': 31,
    'id_hymn': 375
  },
  {
    'id_category': 31,
    'id_hymn': 380
  },
  {
    'id_category': 31,
    'id_hymn': 350
  },
  {
    'id_category': 31,
    'id_hymn': 361
  },
  {
    'id_category': 31,
    'id_hymn': 384
  },
  {
    'id_category': 31,
    'id_hymn': 389
  },
  {
    'id_category': 31,
    'id_hymn': 378
  },
  {
    'id_category': 31,
    'id_hymn': 727
  },
  {
    'id_category': 31,
    'id_hymn': 85
  },
  {
    'id_category': 31,
    'id_hymn': 354
  },
  {
    'id_category': 31,
    'id_hymn': 365
  },
  {
    'id_category': 31,
    'id_hymn': 387
  },
  {
    'id_category': 31,
    'id_hymn': 366
  },
  {
    'id_category': 31,
    'id_hymn': 78
  },
  {
    'id_category': 31,
    'id_hymn': 729
  },
  {
    'id_category': 31,
    'id_hymn': 362
  },
  {
    'id_category': 31,
    'id_hymn': 373
  },
  {
    'id_category': 31,
    'id_hymn': 260
  },
  {
    'id_category': 31,
    'id_hymn': 379
  },
  {
    'id_category': 31,
    'id_hymn': 330
  },
  {
    'id_category': 31,
    'id_hymn': 390
  },
  {
    'id_category': 31,
    'id_hymn': 383
  },
  {
    'id_category': 31,
    'id_hymn': 648
  },
  {
    'id_category': 31,
    'id_hymn': 84
  },
  {
    'id_category': 31,
    'id_hymn': 374
  },
  {
    'id_category': 31,
    'id_hymn': 79
  },
  {
    'id_category': 31,
    'id_hymn': 138
  },
  {
    'id_category': 31,
    'id_hymn': 382
  },
  {
    'id_category': 31,
    'id_hymn': 385
  },
  {
    'id_category': 31,
    'id_hymn': 356
  },
  {
    'id_category': 31,
    'id_hymn': 363
  },
  {
    'id_category': 31,
    'id_hymn': 353
  },
  {
    'id_category': 31,
    'id_hymn': 26
  },
  {
    'id_category': 31,
    'id_hymn': 386
  },
  {
    'id_category': 31,
    'id_hymn': 346
  },
  {
    'id_category': 31,
    'id_hymn': 661
  },
  {
    'id_category': 31,
    'id_hymn': 359
  },
  {
    'id_category': 31,
    'id_hymn': 377
  },
  {
    'id_category': 31,
    'id_hymn': 42
  },
  {
    'id_category': 31,
    'id_hymn': 82
  },
  {
    'id_category': 31,
    'id_hymn': 376
  },
  {
    'id_category': 31,
    'id_hymn': 367
  },
  {
    'id_category': 31,
    'id_hymn': 360
  },
  {
    'id_category': 31,
    'id_hymn': 524
  },
  {
    'id_category': 31,
    'id_hymn': 706
  },
  {
    'id_category': 31,
    'id_hymn': 371
  },
  {
    'id_category': 31,
    'id_hymn': 71
  },
  {
    'id_category': 31,
    'id_hymn': 364
  },
  {
    'id_category': 31,
    'id_hymn': 86
  },
  {
    'id_category': 31,
    'id_hymn': 381
  },
  {
    'id_category': 31,
    'id_hymn': 258
  },
  {
    'id_category': 31,
    'id_hymn': 83
  },
  {
    'id_category': 31,
    'id_hymn': 341
  },
  {
    'id_category': 31,
    'id_hymn': 372
  },
  {
    'id_category': 31,
    'id_hymn': 368
  },
  {
    'id_category': 31,
    'id_hymn': 339
  },
  {
    'id_category': 31,
    'id_hymn': 77
  },
  {
    'id_category': 31,
    'id_hymn': 230
  },
  {
    'id_category': 31,
    'id_hymn': 369
  },
  {
    'id_category': 31,
    'id_hymn': 388
  },
  {
    'id_category': 31,
    'id_hymn': 707
  },
  {
    'id_category': 31,
    'id_hymn': 370
  },
  {
    'id_category': 31,
    'id_hymn': 90
  },
  {
    'id_category': 31,
    'id_hymn': 391
  },
  {
    'id_category': 32,
    'id_hymn': 39
  },
  {
    'id_category': 32,
    'id_hymn': 254
  },
  {
    'id_category': 32,
    'id_hymn': 727
  },
  {
    'id_category': 32,
    'id_hymn': 63
  },
  {
    'id_category': 32,
    'id_hymn': 85
  },
  {
    'id_category': 32,
    'id_hymn': 259
  },
  {
    'id_category': 32,
    'id_hymn': 731
  },
  {
    'id_category': 32,
    'id_hymn': 257
  },
  {
    'id_category': 32,
    'id_hymn': 31
  },
  {
    'id_category': 32,
    'id_hymn': 57
  },
  {
    'id_category': 32,
    'id_hymn': 162
  },
  {
    'id_category': 32,
    'id_hymn': 142
  },
  {
    'id_category': 32,
    'id_hymn': 260
  },
  {
    'id_category': 32,
    'id_hymn': 74
  },
  {
    'id_category': 32,
    'id_hymn': 251
  },
  {
    'id_category': 32,
    'id_hymn': 34
  },
  {
    'id_category': 32,
    'id_hymn': 181
  },
  {
    'id_category': 32,
    'id_hymn': 151
  },
  {
    'id_category': 32,
    'id_hymn': 40
  },
  {
    'id_category': 32,
    'id_hymn': 252
  },
  {
    'id_category': 32,
    'id_hymn': 255
  },
  {
    'id_category': 32,
    'id_hymn': 30
  },
  {
    'id_category': 32,
    'id_hymn': 27
  },
  {
    'id_category': 32,
    'id_hymn': 405
  },
  {
    'id_category': 32,
    'id_hymn': 41
  },
  {
    'id_category': 32,
    'id_hymn': 185
  },
  {
    'id_category': 32,
    'id_hymn': 256
  },
  {
    'id_category': 32,
    'id_hymn': 253
  },
  {
    'id_category': 32,
    'id_hymn': 20
  },
  {
    'id_category': 32,
    'id_hymn': 29
  },
  {
    'id_category': 32,
    'id_hymn': 26
  },
  {
    'id_category': 32,
    'id_hymn': 491
  },
  {
    'id_category': 32,
    'id_hymn': 33
  },
  {
    'id_category': 32,
    'id_hymn': 32
  },
  {
    'id_category': 32,
    'id_hymn': 36
  },
  {
    'id_category': 32,
    'id_hymn': 180
  },
  {
    'id_category': 32,
    'id_hymn': 249
  },
  {
    'id_category': 32,
    'id_hymn': 112
  },
  {
    'id_category': 32,
    'id_hymn': 28
  },
  {
    'id_category': 32,
    'id_hymn': 38
  },
  {
    'id_category': 32,
    'id_hymn': 42
  },
  {
    'id_category': 32,
    'id_hymn': 37
  },
  {
    'id_category': 32,
    'id_hymn': 200
  },
  {
    'id_category': 32,
    'id_hymn': 248
  },
  {
    'id_category': 32,
    'id_hymn': 258
  },
  {
    'id_category': 32,
    'id_hymn': 83
  },
  {
    'id_category': 32,
    'id_hymn': 35
  },
  {
    'id_category': 32,
    'id_hymn': 529
  },
  {
    'id_category': 32,
    'id_hymn': 90
  },
  {
    'id_category': 32,
    'id_hymn': 250
  },
  {
    'id_category': 32,
    'id_hymn': 615
  },
  {
    'id_category': 32,
    'id_hymn': 229
  },
  {
    'id_category': 32,
    'id_hymn': 228
  },
  {
    'id_category': 32,
    'id_hymn': 226
  },
  {
    'id_category': 32,
    'id_hymn': 236
  },
  {
    'id_category': 32,
    'id_hymn': 224
  },
  {
    'id_category': 32,
    'id_hymn': 232
  },
  {
    'id_category': 32,
    'id_hymn': 231
  },
  {
    'id_category': 32,
    'id_hymn': 227
  },
  {
    'id_category': 32,
    'id_hymn': 706
  },
  {
    'id_category': 32,
    'id_hymn': 225
  },
  {
    'id_category': 32,
    'id_hymn': 230
  },
  {
    'id_category': 32,
    'id_hymn': 6
  },
  {
    'id_category': 32,
    'id_hymn': 11
  },
  {
    'id_category': 32,
    'id_hymn': 221
  },
  {
    'id_category': 32,
    'id_hymn': 219
  },
  {
    'id_category': 32,
    'id_hymn': 14
  },
  {
    'id_category': 32,
    'id_hymn': 9
  },
  {
    'id_category': 32,
    'id_hymn': 220
  },
  {
    'id_category': 32,
    'id_hymn': 8
  },
  {
    'id_category': 32,
    'id_hymn': 223
  },
  {
    'id_category': 32,
    'id_hymn': 222
  },
  {
    'id_category': 32,
    'id_hymn': 7
  },
  {
    'id_category': 32,
    'id_hymn': 12
  },
  {
    'id_category': 32,
    'id_hymn': 13
  },
  {
    'id_category': 32,
    'id_hymn': 218
  },
  {
    'id_category': 32,
    'id_hymn': 95
  },
  {
    'id_category': 32,
    'id_hymn': 10
  },
  {
    'id_category': 32,
    'id_hymn': 24
  },
  {
    'id_category': 32,
    'id_hymn': 179
  },
  {
    'id_category': 32,
    'id_hymn': 247
  },
  {
    'id_category': 32,
    'id_hymn': 25
  },
  {
    'id_category': 32,
    'id_hymn': 245
  },
  {
    'id_category': 32,
    'id_hymn': 23
  },
  {
    'id_category': 32,
    'id_hymn': 17
  },
  {
    'id_category': 32,
    'id_hymn': 244
  },
  {
    'id_category': 32,
    'id_hymn': 246
  },
  {
    'id_category': 32,
    'id_hymn': 422
  },
  {
    'id_category': 32,
    'id_hymn': 654
  },
  {
    'id_category': 32,
    'id_hymn': 639
  },
  {
    'id_category': 32,
    'id_hymn': 238
  },
  {
    'id_category': 32,
    'id_hymn': 235
  },
  {
    'id_category': 32,
    'id_hymn': 241
  },
  {
    'id_category': 32,
    'id_hymn': 22
  },
  {
    'id_category': 32,
    'id_hymn': 390
  },
  {
    'id_category': 32,
    'id_hymn': 239
  },
  {
    'id_category': 32,
    'id_hymn': 19
  },
  {
    'id_category': 32,
    'id_hymn': 97
  },
  {
    'id_category': 32,
    'id_hymn': 240
  },
  {
    'id_category': 32,
    'id_hymn': 237
  },
  {
    'id_category': 32,
    'id_hymn': 242
  },
  {
    'id_category': 32,
    'id_hymn': 21
  },
  {
    'id_category': 32,
    'id_hymn': 233
  },
  {
    'id_category': 32,
    'id_hymn': 18
  },
  {
    'id_category': 32,
    'id_hymn': 243
  },
  {
    'id_category': 32,
    'id_hymn': 234
  },
  {
    'id_category': 33,
    'id_hymn': 74
  },
  {
    'id_category': 33,
    'id_hymn': 69
  },
  {
    'id_category': 33,
    'id_hymn': 328
  },
  {
    'id_category': 33,
    'id_hymn': 549
  },
  {
    'id_category': 33,
    'id_hymn': 329
  },
  {
    'id_category': 33,
    'id_hymn': 327
  },
  {
    'id_category': 33,
    'id_hymn': 730
  },
  {
    'id_category': 33,
    'id_hymn': 70
  },
  {
    'id_category': 33,
    'id_hymn': 75
  },
  {
    'id_category': 33,
    'id_hymn': 71
  },
  {
    'id_category': 33,
    'id_hymn': 49
  },
  {
    'id_category': 33,
    'id_hymn': 72
  },
  {
    'id_category': 33,
    'id_hymn': 73
  },
  {
    'id_category': 34,
    'id_hymn': 560
  },
  {
    'id_category': 34,
    'id_hymn': 149
  },
  {
    'id_category': 34,
    'id_hymn': 559
  },
  {
    'id_category': 34,
    'id_hymn': 724
  },
  {
    'id_category': 34,
    'id_hymn': 556
  },
  {
    'id_category': 34,
    'id_hymn': 571
  },
  {
    'id_category': 34,
    'id_hymn': 566
  },
  {
    'id_category': 34,
    'id_hymn': 101
  },
  {
    'id_category': 34,
    'id_hymn': 121
  },
  {
    'id_category': 34,
    'id_hymn': 547
  },
  {
    'id_category': 34,
    'id_hymn': 572
  },
  {
    'id_category': 34,
    'id_hymn': 576
  },
  {
    'id_category': 34,
    'id_hymn': 562
  },
  {
    'id_category': 34,
    'id_hymn': 152
  },
  {
    'id_category': 34,
    'id_hymn': 564
  },
  {
    'id_category': 34,
    'id_hymn': 673
  },
  {
    'id_category': 34,
    'id_hymn': 551
  },
  {
    'id_category': 34,
    'id_hymn': 550
  },
  {
    'id_category': 34,
    'id_hymn': 567
  },
  {
    'id_category': 34,
    'id_hymn': 549
  },
  {
    'id_category': 34,
    'id_hymn': 186
  },
  {
    'id_category': 34,
    'id_hymn': 670
  },
  {
    'id_category': 34,
    'id_hymn': 165
  },
  {
    'id_category': 34,
    'id_hymn': 628
  },
  {
    'id_category': 34,
    'id_hymn': 638
  },
  {
    'id_category': 34,
    'id_hymn': 568
  },
  {
    'id_category': 34,
    'id_hymn': 561
  },
  {
    'id_category': 34,
    'id_hymn': 574
  },
  {
    'id_category': 34,
    'id_hymn': 692
  },
  {
    'id_category': 34,
    'id_hymn': 671
  },
  {
    'id_category': 34,
    'id_hymn': 553
  },
  {
    'id_category': 34,
    'id_hymn': 558
  },
  {
    'id_category': 34,
    'id_hymn': 140
  },
  {
    'id_category': 34,
    'id_hymn': 450
  },
  {
    'id_category': 34,
    'id_hymn': 622
  },
  {
    'id_category': 34,
    'id_hymn': 139
  },
  {
    'id_category': 34,
    'id_hymn': 554
  },
  {
    'id_category': 34,
    'id_hymn': 557
  },
  {
    'id_category': 34,
    'id_hymn': 548
  },
  {
    'id_category': 34,
    'id_hymn': 674
  },
  {
    'id_category': 34,
    'id_hymn': 570
  },
  {
    'id_category': 34,
    'id_hymn': 565
  },
  {
    'id_category': 34,
    'id_hymn': 577
  },
  {
    'id_category': 34,
    'id_hymn': 690
  },
  {
    'id_category': 34,
    'id_hymn': 569
  },
  {
    'id_category': 34,
    'id_hymn': 563
  },
  {
    'id_category': 34,
    'id_hymn': 71
  },
  {
    'id_category': 34,
    'id_hymn': 573
  },
  {
    'id_category': 34,
    'id_hymn': 555
  },
  {
    'id_category': 34,
    'id_hymn': 552
  },
  {
    'id_category': 34,
    'id_hymn': 575
  },
  {
    'id_category': 34,
    'id_hymn': 623
  },
  {
    'id_category': 35,
    'id_hymn': 648
  },
  {
    'id_category': 35,
    'id_hymn': 653
  },
  {
    'id_category': 36,
    'id_hymn': 270
  },
  {
    'id_category': 36,
    'id_hymn': 271
  },
  {
    'id_category': 36,
    'id_hymn': 47
  },
  {
    'id_category': 36,
    'id_hymn': 46
  },
  {
    'id_category': 36,
    'id_hymn': 281
  },
  {
    'id_category': 36,
    'id_hymn': 620
  },
  {
    'id_category': 36,
    'id_hymn': 104
  },
  {
    'id_category': 36,
    'id_hymn': 272
  },
  {
    'id_category': 36,
    'id_hymn': 269
  },
  {
    'id_category': 36,
    'id_hymn': 273
  },
  {
    'id_category': 36,
    'id_hymn': 49
  },
  {
    'id_category': 'id_category',
    'id_hymn': 'id_hymn'
  },
  {
    'id_category': 37,
    'id_hymn': 75
  },
  {
    'id_category': 37,
    'id_hymn': 76
  },
  {
    'id_category': 37,
    'id_hymn': 77
  },
  {
    'id_category': 37,
    'id_hymn': 78
  },
  {
    'id_category': 37,
    'id_hymn': 79
  },
  {
    'id_category': 37,
    'id_hymn': 80
  },
  {
    'id_category': 37,
    'id_hymn': 81
  },
  {
    'id_category': 37,
    'id_hymn': 82
  },
  {
    'id_category': 37,
    'id_hymn': 83
  },
  {
    'id_category': 37,
    'id_hymn': 84
  },
  {
    'id_category': 37,
    'id_hymn': 85
  },
  {
    'id_category': 37,
    'id_hymn': 86
  },
  {
    'id_category': 37,
    'id_hymn': 87
  },
  {
    'id_category': 37,
    'id_hymn': 88
  },
  {
    'id_category': 37,
    'id_hymn': 89
  },
  {
    'id_category': 37,
    'id_hymn': 90
  },
  {
    'id_category': 37,
    'id_hymn': 91
  },
  {
    'id_category': 37,
    'id_hymn': 92
  },
  {
    'id_category': 37,
    'id_hymn': 93
  },
  {
    'id_category': 37,
    'id_hymn': 94
  },
  {
    'id_category': 37,
    'id_hymn': 95
  },
  {
    'id_category': 37,
    'id_hymn': 96
  },
  {
    'id_category': 37,
    'id_hymn': 97
  },
  {
    'id_category': 37,
    'id_hymn': 98
  },
  {
    'id_category': 37,
    'id_hymn': 99
  },
  {
    'id_category': 37,
    'id_hymn': 100
  },
  {
    'id_category': 37,
    'id_hymn': 101
  },
  {
    'id_category': 37,
    'id_hymn': 102
  },
  {
    'id_category': 37,
    'id_hymn': 103
  },
  {
    'id_category': 37,
    'id_hymn': 104
  },
  {
    'id_category': 37,
    'id_hymn': 105
  },
  {
    'id_category': 37,
    'id_hymn': 106
  },
  {
    'id_category': 37,
    'id_hymn': 107
  },
  {
    'id_category': 37,
    'id_hymn': 108
  },
  {
    'id_category': 37,
    'id_hymn': 109
  },
  {
    'id_category': 37,
    'id_hymn': 110
  },
  {
    'id_category': 37,
    'id_hymn': 111
  },
  {
    'id_category': 37,
    'id_hymn': 112
  },
  {
    'id_category': 37,
    'id_hymn': 113
  },
  {
    'id_category': 37,
    'id_hymn': 114
  },
  {
    'id_category': 38,
    'id_hymn': 115
  },
  {
    'id_category': 38,
    'id_hymn': 116
  },
  {
    'id_category': 38,
    'id_hymn': 117
  },
  {
    'id_category': 38,
    'id_hymn': 118
  },
  {
    'id_category': 39,
    'id_hymn': 119
  },
  {
    'id_category': 39,
    'id_hymn': 120
  },
  {
    'id_category': 39,
    'id_hymn': 121
  },
  {
    'id_category': 39,
    'id_hymn': 122
  },
  {
    'id_category': 39,
    'id_hymn': 123
  },
  {
    'id_category': 39,
    'id_hymn': 124
  },
  {
    'id_category': 39,
    'id_hymn': 125
  },
  {
    'id_category': 39,
    'id_hymn': 126
  },
  {
    'id_category': 39,
    'id_hymn': 127
  },
  {
    'id_category': 39,
    'id_hymn': 128
  },
  {
    'id_category': 39,
    'id_hymn': 129
  },
  {
    'id_category': 39,
    'id_hymn': 130
  },
  {
    'id_category': 39,
    'id_hymn': 131
  },
  {
    'id_category': 39,
    'id_hymn': 132
  },
  {
    'id_category': 39,
    'id_hymn': 133
  },
  {
    'id_category': 40,
    'id_hymn': 134
  },
  {
    'id_category': 40,
    'id_hymn': 135
  },
  {
    'id_category': 40,
    'id_hymn': 136
  },
  {
    'id_category': 40,
    'id_hymn': 137
  },
  {
    'id_category': 40,
    'id_hymn': 138
  },
  {
    'id_category': 40,
    'id_hymn': 139
  },
  {
    'id_category': 40,
    'id_hymn': 140
  },
  {
    'id_category': 40,
    'id_hymn': 141
  },
  {
    'id_category': 40,
    'id_hymn': 142
  },
  {
    'id_category': 40,
    'id_hymn': 143
  },
  {
    'id_category': 40,
    'id_hymn': 144
  },
  {
    'id_category': 40,
    'id_hymn': 145
  },
  {
    'id_category': 40,
    'id_hymn': 146
  },
  {
    'id_category': 40,
    'id_hymn': 147
  },
  {
    'id_category': 40,
    'id_hymn': 148
  },
  {
    'id_category': 40,
    'id_hymn': 149
  },
  {
    'id_category': 40,
    'id_hymn': 150
  },
  {
    'id_category': 40,
    'id_hymn': 151
  },
  {
    'id_category': 40,
    'id_hymn': 152
  },
  {
    'id_category': 40,
    'id_hymn': 153
  },
  {
    'id_category': 40,
    'id_hymn': 154
  },
  {
    'id_category': 40,
    'id_hymn': 155
  },
  {
    'id_category': 40,
    'id_hymn': 156
  },
  {
    'id_category': 40,
    'id_hymn': 157
  },
  {
    'id_category': 40,
    'id_hymn': 158
  },
  {
    'id_category': 40,
    'id_hymn': 159
  },
  {
    'id_category': 40,
    'id_hymn': 160
  },
  {
    'id_category': 40,
    'id_hymn': 161
  },
  {
    'id_category': 40,
    'id_hymn': 162
  },
  {
    'id_category': 40,
    'id_hymn': 163
  },
  {
    'id_category': 40,
    'id_hymn': 164
  },
  {
    'id_category': 40,
    'id_hymn': 165
  },
  {
    'id_category': 40,
    'id_hymn': 166
  },
  {
    'id_category': 40,
    'id_hymn': 167
  },
  {
    'id_category': 40,
    'id_hymn': 168
  },
  {
    'id_category': 41,
    'id_hymn': 169
  },
  {
    'id_category': 41,
    'id_hymn': 170
  },
  {
    'id_category': 41,
    'id_hymn': 171
  },
  {
    'id_category': 41,
    'id_hymn': 172
  },
  {
    'id_category': 41,
    'id_hymn': 173
  },
  {
    'id_category': 41,
    'id_hymn': 174
  },
  {
    'id_category': 41,
    'id_hymn': 175
  },
  {
    'id_category': 41,
    'id_hymn': 176
  },
  {
    'id_category': 41,
    'id_hymn': 177
  },
  {
    'id_category': 41,
    'id_hymn': 178
  },
  {
    'id_category': 41,
    'id_hymn': 179
  },
  {
    'id_category': 41,
    'id_hymn': 180
  },
  {
    'id_category': 41,
    'id_hymn': 181
  },
  {
    'id_category': 41,
    'id_hymn': 182
  },
  {
    'id_category': 41,
    'id_hymn': 183
  },
  {
    'id_category': 41,
    'id_hymn': 184
  },
  {
    'id_category': 41,
    'id_hymn': 185
  },
  {
    'id_category': 41,
    'id_hymn': 186
  },
  {
    'id_category': 41,
    'id_hymn': 187
  },
  {
    'id_category': 41,
    'id_hymn': 188
  },
  {
    'id_category': 41,
    'id_hymn': 189
  },
  {
    'id_category': 41,
    'id_hymn': 190
  },
  {
    'id_category': 41,
    'id_hymn': 191
  },
  {
    'id_category': 41,
    'id_hymn': 192
  },
  {
    'id_category': 41,
    'id_hymn': 193
  },
  {
    'id_category': 41,
    'id_hymn': 194
  },
  {
    'id_category': 41,
    'id_hymn': 195
  },
  {
    'id_category': 41,
    'id_hymn': 196
  },
  {
    'id_category': 41,
    'id_hymn': 197
  },
  {
    'id_category': 41,
    'id_hymn': 198
  },
  {
    'id_category': 41,
    'id_hymn': 199
  },
  {
    'id_category': 41,
    'id_hymn': 200
  },
  {
    'id_category': 41,
    'id_hymn': 201
  },
  {
    'id_category': 41,
    'id_hymn': 202
  },
  {
    'id_category': 41,
    'id_hymn': 203
  },
  {
    'id_category': 41,
    'id_hymn': 204
  },
  {
    'id_category': 41,
    'id_hymn': 205
  },
  {
    'id_category': 41,
    'id_hymn': 206
  },
  {
    'id_category': 41,
    'id_hymn': 207
  },
  {
    'id_category': 41,
    'id_hymn': 208
  },
  {
    'id_category': 41,
    'id_hymn': 209
  },
  {
    'id_category': 42,
    'id_hymn': 281
  },
  {
    'id_category': 42,
    'id_hymn': 282
  },
  {
    'id_category': 42,
    'id_hymn': 283
  },
  {
    'id_category': 42,
    'id_hymn': 284
  },
  {
    'id_category': 42,
    'id_hymn': 725
  },
  {
    'id_category': 43,
    'id_hymn': 100
  },
  {
    'id_category': 43,
    'id_hymn': 101
  },
  {
    'id_category': 43,
    'id_hymn': 102
  },
  {
    'id_category': 43,
    'id_hymn': 103
  },
  {
    'id_category': 43,
    'id_hymn': 104
  },
  {
    'id_category': 43,
    'id_hymn': 105
  },
  {
    'id_category': 43,
    'id_hymn': 106
  },
  {
    'id_category': 43,
    'id_hymn': 107
  },
  {
    'id_category': 43,
    'id_hymn': 108
  },
  {
    'id_category': 43,
    'id_hymn': 115
  },
  {
    'id_category': 43,
    'id_hymn': 131
  },
  {
    'id_category': 43,
    'id_hymn': 138
  },
  {
    'id_category': 43,
    'id_hymn': 158
  },
  {
    'id_category': 43,
    'id_hymn': 16
  },
  {
    'id_category': 43,
    'id_hymn': 162
  },
  {
    'id_category': 43,
    'id_hymn': 17
  },
  {
    'id_category': 43,
    'id_hymn': 171
  },
  {
    'id_category': 43,
    'id_hymn': 185
  },
  {
    'id_category': 43,
    'id_hymn': 19
  },
  {
    'id_category': 43,
    'id_hymn': 200
  },
  {
    'id_category': 43,
    'id_hymn': 218
  },
  {
    'id_category': 43,
    'id_hymn': 220
  },
  {
    'id_category': 43,
    'id_hymn': 224
  },
  {
    'id_category': 43,
    'id_hymn': 226
  },
  {
    'id_category': 43,
    'id_hymn': 229
  },
  {
    'id_category': 43,
    'id_hymn': 231
  },
  {
    'id_category': 43,
    'id_hymn': 241
  },
  {
    'id_category': 43,
    'id_hymn': 245
  },
  {
    'id_category': 43,
    'id_hymn': 248
  },
  {
    'id_category': 43,
    'id_hymn': 250
  },
  {
    'id_category': 43,
    'id_hymn': 251
  },
  {
    'id_category': 43,
    'id_hymn': 252
  },
  {
    'id_category': 43,
    'id_hymn': 254
  },
  {
    'id_category': 43,
    'id_hymn': 26
  },
  {
    'id_category': 43,
    'id_hymn': 28
  },
  {
    'id_category': 43,
    'id_hymn': 29
  },
  {
    'id_category': 43,
    'id_hymn': 292
  },
  {
    'id_category': 43,
    'id_hymn': 305
  },
  {
    'id_category': 43,
    'id_hymn': 31
  },
  {
    'id_category': 43,
    'id_hymn': 33
  },
  {
    'id_category': 43,
    'id_hymn': 342
  },
  {
    'id_category': 43,
    'id_hymn': 35
  },
  {
    'id_category': 43,
    'id_hymn': 350
  },
  {
    'id_category': 43,
    'id_hymn': 361
  },
  {
    'id_category': 43,
    'id_hymn': 363
  },
  {
    'id_category': 43,
    'id_hymn': 364
  },
  {
    'id_category': 43,
    'id_hymn': 365
  },
  {
    'id_category': 43,
    'id_hymn': 366
  },
  {
    'id_category': 43,
    'id_hymn': 367
  },
  {
    'id_category': 43,
    'id_hymn': 368
  },
  {
    'id_category': 43,
    'id_hymn': 376
  },
  {
    'id_category': 43,
    'id_hymn': 377
  },
  {
    'id_category': 43,
    'id_hymn': 38
  },
  {
    'id_category': 43,
    'id_hymn': 390
  },
  {
    'id_category': 43,
    'id_hymn': 391
  },
  {
    'id_category': 43,
    'id_hymn': 393
  },
  {
    'id_category': 43,
    'id_hymn': 396
  },
  {
    'id_category': 43,
    'id_hymn': 404
  },
  {
    'id_category': 43,
    'id_hymn': 405
  },
  {
    'id_category': 43,
    'id_hymn': 406
  },
  {
    'id_category': 43,
    'id_hymn': 407
  },
  {
    'id_category': 43,
    'id_hymn': 408
  },
  {
    'id_category': 43,
    'id_hymn': 409
  },
  {
    'id_category': 43,
    'id_hymn': 41
  },
  {
    'id_category': 43,
    'id_hymn': 410
  },
  {
    'id_category': 43,
    'id_hymn': 411
  },
  {
    'id_category': 43,
    'id_hymn': 412
  },
  {
    'id_category': 43,
    'id_hymn': 413
  },
  {
    'id_category': 43,
    'id_hymn': 414
  },
  {
    'id_category': 43,
    'id_hymn': 415
  },
  {
    'id_category': 43,
    'id_hymn': 416
  },
  {
    'id_category': 43,
    'id_hymn': 417
  },
  {
    'id_category': 43,
    'id_hymn': 418
  },
  {
    'id_category': 43,
    'id_hymn': 419
  },
  {
    'id_category': 43,
    'id_hymn': 425
  },
  {
    'id_category': 43,
    'id_hymn': 486
  },
  {
    'id_category': 43,
    'id_hymn': 489
  },
  {
    'id_category': 43,
    'id_hymn': 497
  },
  {
    'id_category': 43,
    'id_hymn': 507
  },
  {
    'id_category': 43,
    'id_hymn': 508
  },
  {
    'id_category': 43,
    'id_hymn': 519
  },
  {
    'id_category': 43,
    'id_hymn': 57
  },
  {
    'id_category': 43,
    'id_hymn': 619
  },
  {
    'id_category': 43,
    'id_hymn': 682
  },
  {
    'id_category': 43,
    'id_hymn': 684
  },
  {
    'id_category': 43,
    'id_hymn': 703
  },
  {
    'id_category': 43,
    'id_hymn': 705
  },
  {
    'id_category': 43,
    'id_hymn': 708
  },
  {
    'id_category': 43,
    'id_hymn': 710
  },
  {
    'id_category': 43,
    'id_hymn': 726
  },
  {
    'id_category': 43,
    'id_hymn': 93
  },
  {
    'id_category': 43,
    'id_hymn': 94
  },
  {
    'id_category': 43,
    'id_hymn': 95
  },
  {
    'id_category': 43,
    'id_hymn': 96
  },
  {
    'id_category': 43,
    'id_hymn': 97
  },
  {
    'id_category': 43,
    'id_hymn': 98
  },
  {
    'id_category': 43,
    'id_hymn': 99
  },
  {
    'id_category': 44,
    'id_hymn': 182
  },
  {
    'id_category': 44,
    'id_hymn': 187
  },
  {
    'id_category': 44,
    'id_hymn': 188
  },
  {
    'id_category': 44,
    'id_hymn': 189
  },
  {
    'id_category': 44,
    'id_hymn': 190
  },
  {
    'id_category': 44,
    'id_hymn': 191
  },
  {
    'id_category': 44,
    'id_hymn': 192
  },
  {
    'id_category': 44,
    'id_hymn': 193
  },
  {
    'id_category': 44,
    'id_hymn': 194
  },
  {
    'id_category': 44,
    'id_hymn': 195
  },
  {
    'id_category': 44,
    'id_hymn': 202
  },
  {
    'id_category': 44,
    'id_hymn': 253
  },
  {
    'id_category': 44,
    'id_hymn': 343
  },
  {
    'id_category': 44,
    'id_hymn': 38
  },
  {
    'id_category': 44,
    'id_hymn': 481
  },
  {
    'id_category': 44,
    'id_hymn': 570
  },
  {
    'id_category': 44,
    'id_hymn': 632
  },
  {
    'id_category': 44,
    'id_hymn': 633
  },
  {
    'id_category': 44,
    'id_hymn': 634
  },
  {
    'id_category': 44,
    'id_hymn': 635
  },
  {
    'id_category': 44,
    'id_hymn': 636
  },
  {
    'id_category': 44,
    'id_hymn': 637
  },
  {
    'id_category': 44,
    'id_hymn': 638
  },
  {
    'id_category': 44,
    'id_hymn': 639
  },
  {
    'id_category': 44,
    'id_hymn': 640
  },
  {
    'id_category': 44,
    'id_hymn': 641
  },
  {
    'id_category': 44,
    'id_hymn': 642
  },
  {
    'id_category': 44,
    'id_hymn': 643
  },
  {
    'id_category': 44,
    'id_hymn': 644
  },
  {
    'id_category': 44,
    'id_hymn': 645
  },
  {
    'id_category': 44,
    'id_hymn': 646
  },
  {
    'id_category': 44,
    'id_hymn': 647
  },
  {
    'id_category': 44,
    'id_hymn': 648
  },
  {
    'id_category': 44,
    'id_hymn': 649
  },
  {
    'id_category': 44,
    'id_hymn': 650
  },
  {
    'id_category': 44,
    'id_hymn': 651
  },
  {
    'id_category': 44,
    'id_hymn': 652
  },
  {
    'id_category': 44,
    'id_hymn': 653
  },
  {
    'id_category': 44,
    'id_hymn': 654
  },
  {
    'id_category': 44,
    'id_hymn': 655
  },
  {
    'id_category': 45,
    'id_hymn': 123
  },
  {
    'id_category': 45,
    'id_hymn': 129
  },
  {
    'id_category': 45,
    'id_hymn': 135
  },
  {
    'id_category': 45,
    'id_hymn': 145
  },
  {
    'id_category': 45,
    'id_hymn': 331
  },
  {
    'id_category': 45,
    'id_hymn': 337
  },
  {
    'id_category': 45,
    'id_hymn': 345
  },
  {
    'id_category': 45,
    'id_hymn': 349
  },
  {
    'id_category': 45,
    'id_hymn': 350
  },
  {
    'id_category': 45,
    'id_hymn': 360
  },
  {
    'id_category': 45,
    'id_hymn': 364
  },
  {
    'id_category': 45,
    'id_hymn': 409
  },
  {
    'id_category': 45,
    'id_hymn': 427
  },
  {
    'id_category': 45,
    'id_hymn': 445
  },
  {
    'id_category': 45,
    'id_hymn': 450
  },
  {
    'id_category': 45,
    'id_hymn': 465
  },
  {
    'id_category': 45,
    'id_hymn': 505
  },
  {
    'id_category': 45,
    'id_hymn': 510
  },
  {
    'id_category': 45,
    'id_hymn': 513
  },
  {
    'id_category': 45,
    'id_hymn': 516
  },
  {
    'id_category': 45,
    'id_hymn': 531
  },
  {
    'id_category': 45,
    'id_hymn': 561
  },
  {
    'id_category': 45,
    'id_hymn': 572
  },
  {
    'id_category': 45,
    'id_hymn': 606
  },
  {
    'id_category': 45,
    'id_hymn': 614
  },
  {
    'id_category': 45,
    'id_hymn': 615
  },
  {
    'id_category': 45,
    'id_hymn': 616
  },
  {
    'id_category': 45,
    'id_hymn': 623
  },
  {
    'id_category': 45,
    'id_hymn': 636
  },
  {
    'id_category': 45,
    'id_hymn': 679
  },
  {
    'id_category': 45,
    'id_hymn': 729
  },
  {
    'id_category': 45,
    'id_hymn': 87
  },
  {
    'id_category': 46,
    'id_hymn': 127
  },
  {
    'id_category': 46,
    'id_hymn': 133
  },
  {
    'id_category': 46,
    'id_hymn': 134
  },
  {
    'id_category': 46,
    'id_hymn': 135
  },
  {
    'id_category': 46,
    'id_hymn': 136
  },
  {
    'id_category': 46,
    'id_hymn': 137
  },
  {
    'id_category': 46,
    'id_hymn': 138
  },
  {
    'id_category': 46,
    'id_hymn': 139
  },
  {
    'id_category': 46,
    'id_hymn': 140
  },
  {
    'id_category': 46,
    'id_hymn': 141
  },
  {
    'id_category': 46,
    'id_hymn': 142
  },
  {
    'id_category': 46,
    'id_hymn': 143
  },
  {
    'id_category': 46,
    'id_hymn': 144
  },
  {
    'id_category': 46,
    'id_hymn': 145
  },
  {
    'id_category': 46,
    'id_hymn': 146
  },
  {
    'id_category': 46,
    'id_hymn': 147
  },
  {
    'id_category': 46,
    'id_hymn': 148
  },
  {
    'id_category': 46,
    'id_hymn': 149
  },
  {
    'id_category': 46,
    'id_hymn': 150
  },
  {
    'id_category': 46,
    'id_hymn': 184
  },
  {
    'id_category': 46,
    'id_hymn': 330
  },
  {
    'id_category': 46,
    'id_hymn': 336
  },
  {
    'id_category': 46,
    'id_hymn': 421
  },
  {
    'id_category': 46,
    'id_hymn': 461
  },
  {
    'id_category': 46,
    'id_hymn': 462
  },
  {
    'id_category': 46,
    'id_hymn': 463
  },
  {
    'id_category': 46,
    'id_hymn': 464
  },
  {
    'id_category': 46,
    'id_hymn': 465
  },
  {
    'id_category': 46,
    'id_hymn': 466
  },
  {
    'id_category': 46,
    'id_hymn': 467
  },
  {
    'id_category': 46,
    'id_hymn': 468
  },
  {
    'id_category': 46,
    'id_hymn': 72
  },
  {
    'id_category': 46,
    'id_hymn': 721
  },
  {
    'id_category': 46,
    'id_hymn': 73
  },
  {
    'id_category': 46,
    'id_hymn': 80
  },
  {
    'id_category': 46,
    'id_hymn': 88
  },
  {
    'id_category': 47,
    'id_hymn': 193
  },
  {
    'id_category': 47,
    'id_hymn': 329
  },
  {
    'id_category': 47,
    'id_hymn': 385
  },
  {
    'id_category': 47,
    'id_hymn': 436
  },
  {
    'id_category': 47,
    'id_hymn': 558
  },
  {
    'id_category': 47,
    'id_hymn': 634
  },
  {
    'id_category': 47,
    'id_hymn': 651
  },
  {
    'id_category': 47,
    'id_hymn': 724
  },
  {
    'id_category': 48,
    'id_hymn': 298
  },
  {
    'id_category': 48,
    'id_hymn': 340
  },
  {
    'id_category': 48,
    'id_hymn': 354
  },
  {
    'id_category': 48,
    'id_hymn': 728
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('hymns_x_categories', items, {});
  },

  down (queryInterface, Sequelize) { }
};
